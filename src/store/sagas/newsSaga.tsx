import { put, takeEvery, all, fork } from "redux-saga/effects";

import { fetchEverythingNews, fetchHedlineNews } from "../services/newsServices";
import * as actionCreators from "../actionCreators/newsActionCreators";
import * as actionTypes from "../actionTypes/newsActionTypes";
import NewsType from "../../types/newsTypes";
import * as Effects from "redux-saga/effects";

const call: any = Effects.call;

function* onLoadHedlineNews({ page }: actionTypes.GetHedlineNewsAction) {
  try {
    yield put(actionCreators.getNewsRequest());
    const { data } = yield call(fetchHedlineNews, page);
    let tempData: NewsType = data
    tempData.page = page;
    yield put(actionCreators.getHedlineNewsSuccess(tempData));
  } catch (error) {
    yield put(actionCreators.getNewsFailure(error.response.data.error));
  }
}

function* onLoadEverythingNews({ searchTerm, sortBy, page }: actionTypes.GetEverythingNewsAction) {
  try {
    yield put(actionCreators.getNewsRequest());
    const { data } = yield call(fetchEverythingNews, page, sortBy, searchTerm);
    let tempData: NewsType = data
    tempData.page = page;
    yield put(actionCreators.getEverythingNewsSuccess(tempData));
  } catch (error) {
    yield put(actionCreators.getNewsFailure(error.response.data.error));
  }
}

function* watchOnLoadNews() {
  yield takeEvery(actionTypes.GET_HEDLINE_NEWS, onLoadHedlineNews);
  yield takeEvery(actionTypes.GET_EVERYTHING_NEWS, onLoadEverythingNews);
}

export default function* newsSaga() {
  yield all([fork(watchOnLoadNews)]);
}
