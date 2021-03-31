import React, { useEffect, useState } from "react"
import { CardColumns } from "react-bootstrap"
import styled from 'styled-components';

import CardComponent from "./CardComponent";
import NewsType, { ArticleType } from "../../types/newsTypes";
import { useRouter, useWindowDimensions } from "../../helpers/hooks";
import LoadingCards from "./LoadingCards";
import more from "../../images/more.png"

const StyledCardColumns = styled(CardColumns)`
  grid-column-gap: 1.5rem;
  @media only screen and (min-width: 576px) {
      column-count: 1;
  }
  @media only screen and (min-width: 768px) {
    column-count: 2;
  }
  @media only screen and (min-width: 992px) {
    column-count: 3;
  }
`;

const LoadMoreCardComponent = styled(CardComponent)`
  cursor: pointer;
  padding: 1.5rem;
  border-radius: 25px;
  &:hover {
    background-color: #d9d9d9 !important;
  }
`;

interface Props {
    pagedNews: Array<NewsType>;
    allArticles: Array<ArticleType>;
    isLoading: boolean;
    className?: string;
    totalResults: number;
    loadMoreArticles: () => void;
}

const ShowCards: React.FC<Props> = props => {
    const { loadMoreArticles, pagedNews, isLoading, allArticles, totalResults } = props;
    const router = useRouter();
    const { width } = useWindowDimensions();
    const [articles, setArticles] = useState<Array<ArticleType>>([]);
    const [columns, setColumns] = useState<number>(3);

    if (width < 768 && columns !== 1) {
        setColumns(1);
    } else if (width < 992 && width >= 768 && columns !== 2) {
        setColumns(2);
    } else if (width >= 992 && columns !== 3) {
        setColumns(3);
    }

    const reorder = (articles: Array<ArticleType>, columns: number,) => {
        const cols = columns;
        const out = [];
        let col = 0;
        while (col < cols) {
            for (let i = 0; i < articles.length; i += cols) {
                let _val = articles[i + col];
                if (_val !== undefined)
                    out.push(_val);
            }
            col++;
        }
        return out
    }

    useEffect(() => {
        setArticles(reorder(allArticles, columns))
    }, [allArticles, columns])

    console.log("news", pagedNews)
    return (
        <StyledCardColumns className="p-4">
            {!isLoading &&
                articles.map((a, i) => (
                    <CardComponent onClick={() => router.push(`/news/${a.title}`)} article={a} key={i} />
                ))}
            <LoadingCards isLoading={isLoading} />
            {articles.length <= totalResults &&
                <LoadMoreCardComponent onClick={loadMoreArticles} article={{ urlToImage: more }} key={articles.length + 1} />
            }
        </StyledCardColumns>
    )
}

export default ShowCards;
