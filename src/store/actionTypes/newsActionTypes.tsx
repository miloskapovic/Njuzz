import NewsType from "../../types/newsTypes";

export const SET_SEARCH_TERM = "newsActionTypes/SET_SEARCH_TERM";
export interface SetSearchTermAction {
  type: typeof SET_SEARCH_TERM;
  searchTerm: string;
}

export const SET_SORT_BY = "newsActionTypes/SET_SORT_BY";
export interface SetSortByAction {
  type: typeof SET_SORT_BY;
  sortBy: string;
}

export const GET_HEDLINE_NEWS = "newsActionTypes/GET_HEDLINE_NEWS";
export interface GetHedlineNewsAction {
  type: typeof GET_HEDLINE_NEWS;
  page: number;
}

export const GET_EVERYTHING_NEWS = "newsActionTypes/GET_EVERYTHING_NEWS";
export interface GetEverythingNewsAction {
  type: typeof GET_EVERYTHING_NEWS;
  searchTerm: string;
  sortBy: string;
  page: number;
}

export const GET_NEWS_REQUEST = "newsActionTypes/GET_NEWS_REQUEST";
export interface GetNewsRequestAction {
  type: typeof GET_NEWS_REQUEST;
}

export const GET_HEDLINE_NEWS_SUCCESS = "newsActionTypes/GET_HEDLINE_NEWS_SUCCESS";
export interface GetHedlineNewsSuccessAction {
  type: typeof GET_HEDLINE_NEWS_SUCCESS;
  news: NewsType;
}

export const GET_EVERYTHING_NEWS_SUCCESS = "newsActionTypes/GET_EVERYTHING_NEWS_SUCCESS";
export interface GetEverythingNewsSuccessAction {
  type: typeof GET_EVERYTHING_NEWS_SUCCESS;
  news: NewsType;
}

export const GET_NEWS_FAILURE = "newsActionTypes/GET_NEWS_FAILURE";
export interface GetNewsFailureAction {
  type: typeof GET_NEWS_FAILURE;
  error: Error | string;
}

export type NewsAction =
  | SetSearchTermAction
  | SetSortByAction
  | GetHedlineNewsAction
  | GetEverythingNewsAction
  | GetNewsRequestAction
  | GetHedlineNewsSuccessAction
  | GetEverythingNewsSuccessAction
  | GetNewsFailureAction;
