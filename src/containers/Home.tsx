import React, { Dispatch, useEffect } from "react"
import { connect } from "react-redux";

import { getHedlineNews } from "../store/actionCreators/newsActionCreators";
import { NewsAction } from "../store/actionTypes/newsActionTypes";
import * as actionTypes from "../store/actionTypes/newsActionTypes";
import { AppState } from "../store/reducers/rootReducer";
import NewsType, { ArticleType } from "../types/newsTypes";
import ShowCards from "../components/cards/ShowCards";

interface Props {
    pagedNews: Array<NewsType>;
    allArticles: Array<ArticleType>;
    isLoading: boolean;
    totalResults: number;
    error: Error | string | null;
    onGetHedlineNews(page: number): void;
}

const Home: React.FC<Props> = props => {
  const { onGetHedlineNews, pagedNews, isLoading, allArticles, totalResults } = props;

  useEffect(() => {
    onGetHedlineNews(1)
  }, [])

  return (
    <ShowCards
      allArticles={allArticles}
      pagedNews={pagedNews}
      totalResults={totalResults}
      isLoading={isLoading}
      loadMoreArticles={() => onGetHedlineNews(pagedNews.length + 1)}
    />
  )
}

const mapStateToProps = (state: AppState) => {
    return {
      pagedNews: state.hedlineNews.pagedNews,
      allArticles: state.hedlineNews.allArticles,
      totalResults: state.hedlineNews.totalResults,
      isLoading: state.isLoading[actionTypes.GET_HEDLINE_NEWS],
      error: state.error[actionTypes.GET_HEDLINE_NEWS]
    };
};

const mapDispatchToProps = (dispatch: Dispatch<NewsAction>) => ({
  onGetHedlineNews: (page: number) => {
      dispatch(getHedlineNews(page));
    }
  });
  
export default connect(mapStateToProps, mapDispatchToProps)(Home);
