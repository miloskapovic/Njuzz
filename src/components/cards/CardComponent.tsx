import React, { useEffect, useState } from "react"
import { Card, Spinner } from "react-bootstrap"
import defaultNews from "../../images/defaultNews.jpg";
import styled from "styled-components";
import { ArticleType } from "../../types/newsTypes";

const LoadingSpinner = styled(Spinner)`
  position: absolute; 
  left: 0; 
  right: 0; 
  margin-left: auto; 
  margin-right: auto; 
  width: 2rem;
  top: 140px;
`;

const CardTextContent = styled.div`
  text-align: left;
  font-weight: bold;
  text-shadow: 2px 2px black;
`;


interface Props {
  article?: ArticleType;
  key: number;
  className?: string;
  isLoading?: boolean;
  onClick?: () => void;
}

const CardComponent: React.FC<Props> = props => {
  const { onClick, article, key, className, isLoading } = props;
  const [imgUrl, setImgUrl] = useState<string | undefined>(defaultNews);
  const [loadingImg, setLoadingImg] = useState<boolean>(true);

  useEffect(() => {
    setImgUrl(article?.urlToImage || defaultNews)
  }, [article])

  const handleFaildToLoadImg = () => {
    setLoadingImg(false)
    setImgUrl(defaultNews)
  }

  return (
    <Card key={key} onClick={onClick} className={`${className || ''} bg-white text-white border-0 mb-4`}>
      <Card.Img onError={handleFaildToLoadImg} onLoad={() => setLoadingImg(false)} src={imgUrl} alt="Card image" />
      <Card.ImgOverlay>
        <CardTextContent>
          <h3>{article?.title}</h3>
          <Card.Text>
            {article?.description}
          </Card.Text>
        </CardTextContent>
      </Card.ImgOverlay>
      {(isLoading || loadingImg) &&
        <LoadingSpinner animation="border" variant="dark" role="status" />
      }
    </Card>
  )
}

export default CardComponent