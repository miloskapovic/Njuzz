import { all, fork } from "redux-saga/effects";
import NewsSaga from "./newsSaga";

export default function* rootSaga() {
  yield all([fork(NewsSaga)]);
}