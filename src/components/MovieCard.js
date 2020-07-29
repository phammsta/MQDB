import React from 'react'
import { Badge } from "react-bootstrap";

export default function movieCard(props) {
    let item = props.movie
    return (
        <div className="mvcard">
            <img src={`https://image.tmdb.org/t/p/w220_and_h330_face/${item.poster_path}`} />
            <h2>{item.vote_average}</h2>
            
            <h2 className="mvtitle">{item.title}</h2>

        </div>
    )
}
