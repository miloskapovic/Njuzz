import React from "react"

import gray from "../../images/gray.png"

import CardComponent from "./CardComponent";

interface Props {
    isLoading?: boolean;
}

const LoadingCards: React.FC<Props> = props => (
    <>
        {props.isLoading &&
            [...Array(10)].map((a, i) => {
                return <CardComponent article={{ urlToImage: gray }} key={i} isLoading={props.isLoading} />

            })
        }
    </>
)

export default LoadingCards;