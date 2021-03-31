import React, { Dispatch, useEffect } from "react"
import { connect } from "react-redux";

import { NewsAction } from "../store/actionTypes/newsActionTypes";
import { AppState } from "../store/reducers/rootReducer";
import NewsType, { ArticleType } from "../types/newsTypes";
import * as actionTypes from "../store/actionTypes/newsActionTypes";
import { getEverythingNews } from "../store/actionCreators/newsActionCreators";
import ShowCards from "../components/cards/ShowCards";

interface Props {
    pagedNews: Array<NewsType>;
    allArticles: Array<ArticleType>;
    isLoading: boolean;
    totalResults: number;
    searchTerm: string;
    sortBy: string;
    error: Error | string | null;
    onGetEverythingNews(searchTerm: string, sortBy: string, page: number): void;
}

const SearchAndSort: React.FC<Props> = props => {
    const { onGetEverythingNews, pagedNews, isLoading, allArticles, totalResults, searchTerm, sortBy } = props;

    useEffect(() => {
        onGetEverythingNews(searchTerm, sortBy, 1)
    }, [searchTerm, sortBy])

    return (
        <ShowCards
            allArticles={allArticles}
            pagedNews={pagedNews}
            totalResults={totalResults}
            isLoading={isLoading}
            loadMoreArticles={() => onGetEverythingNews(searchTerm, sortBy, pagedNews.length + 1)}
        />
    )
}

const mapStateToProps = (state: AppState) => {
    return {
        pagedNews: state.everythingNews.pagedNews,
        allArticles: state.everythingNews.allArticles,
        totalResults: state.everythingNews.totalResults,
        searchTerm: state.everythingNews.searchTerm,
        sortBy: state.everythingNews.sortBy,
        isLoading: state.isLoading[actionTypes.GET_EVERYTHING_NEWS],
        error: state.error[actionTypes.GET_EVERYTHING_NEWS]
    };
};

const mapDispatchToProps = (dispatch: Dispatch<NewsAction>) => ({
    onGetEverythingNews: (searchTerm: string, sortBy: string, page: number) => {
        dispatch(getEverythingNews(searchTerm, sortBy, page));
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchAndSort);
