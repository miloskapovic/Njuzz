import React from "react"
import { Container, Image } from "react-bootstrap"
import { connect } from "react-redux";
import moment from "moment";
import { useParams } from "react-router";

import { AppState } from "../store/reducers/rootReducer";
import { ArticleType } from "../types/newsTypes";
import defaultNews from "../images/defaultNews.jpg";

interface Props {
  allArticles: Array<ArticleType>;
}

interface ParamTypes {
  newsId: string
}

const Article: React.FC<Props> = props => {
  let { newsId } = useParams<ParamTypes>();
  const { allArticles } = props;

  const article = allArticles.find(a => a.title == newsId)
  let publishDate = moment(article?.publishedAt || new Date().toDateString()).format('MMMM Do YYYY');

  return (
    <Container className="text-left pt-5 pb-5">
      <h1 className="mb-3">{article?.title || ''}</h1>
      <p className="mb-3">{publishDate}</p>
      <Image src={article?.urlToImage || defaultNews} fluid className="mb-3" />
      <p className="mb-3">{article?.content || ''}</p>
      {article?.author &&
        <p>Author: {article?.author || ''}</p>
      }
    </Container>
  )
}

const mapStateToProps = (state: AppState) => {
  return {
    allArticles: state.hedlineNews.allArticles.concat(state.everythingNews.allArticles)
  };
};

export default connect(mapStateToProps, null)(Article);
