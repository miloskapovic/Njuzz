import NewsType from "../../types/newsTypes";
import * as actions from "../actionTypes/newsActionTypes";

export function setSearchTerm(
  searchTerm: string
): actions.SetSearchTermAction {
  return {
    type: actions.SET_SEARCH_TERM,
    searchTerm
  };
}

export function setSortBy(
  sortBy: string
): actions.SetSortByAction {
  return {
    type: actions.SET_SORT_BY,
    sortBy
  };
}

export function getHedlineNews(
  page: number
): actions.GetHedlineNewsAction {
  return {
    type: actions.GET_HEDLINE_NEWS,
    page
  };
}

export function getEverythingNews(
  searchTerm: string,
  sortBy: string,
  page: number
): actions.GetEverythingNewsAction {
  return {
    type: actions.GET_EVERYTHING_NEWS,
    searchTerm,
    sortBy,
    page
  };
}

export function getNewsRequest(): actions.GetNewsRequestAction {
  return {
    type: actions.GET_NEWS_REQUEST
  };
}

export function getHedlineNewsSuccess(
  news: NewsType
): actions.GetHedlineNewsSuccessAction {
  return {
    type: actions.GET_HEDLINE_NEWS_SUCCESS,
    news
  };
}

export function getEverythingNewsSuccess(
  news: NewsType
): actions.GetEverythingNewsSuccessAction {
  return {
    type: actions.GET_EVERYTHING_NEWS_SUCCESS,
    news
  };
}

export function getNewsFailure(
  error: Error | string
): actions.GetNewsFailureAction {
  return {
    type: actions.GET_NEWS_FAILURE,
    error
  };
}
