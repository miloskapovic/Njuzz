import * as actions from "../actionTypes/newsActionTypes";
import NewsType, { ArticleType } from "../../types/newsTypes"

export interface NewsState {
  pagedNews: Array<NewsType>;
  allArticles: Array<ArticleType>;
  totalResults: number;
  searchTerm: string;
  sortBy: string;
}

const initialState: NewsState = {
  pagedNews: [],
  allArticles: [],
  totalResults: 0,
  searchTerm: '',
  sortBy: ''
};


export default function newsEverythingReducer(
  state: NewsState = initialState,
  action: actions.NewsAction
): NewsState {
  switch (action.type) {
    case actions.SET_SEARCH_TERM:
      return {
        ...state,
        searchTerm: action.searchTerm
      }
    case actions.SET_SORT_BY:
      return {
        ...state,
        sortBy: action.sortBy
      }
    case actions.GET_EVERYTHING_NEWS_SUCCESS:
      state.pagedNews.push(action.news)
      let pagedNews: Array<NewsType>;
      let allArticles: Array<ArticleType>;
      if (action?.news?.page == 1) {
        pagedNews = [action.news]
        allArticles = action?.news?.articles || []
      } else {
        pagedNews = state.pagedNews.concat([action.news]);
        allArticles = state.allArticles.concat(action?.news?.articles || []);
      }
      return {
        ...state,
        pagedNews: pagedNews,
        allArticles: allArticles,
        totalResults: action.news?.totalResults || 0
      };
    default:
      return state;
  }
}


