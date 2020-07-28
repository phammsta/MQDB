import React from 'react'

export default function movieCard(props) {
    let item = props.movie
    return (
        <div className="mvcard">
            <img src={`https://image.tmdb.org/t/p/w220_and_h330_face/${item.poster_path}`}/>
            <h2>{item.popularity}</h2>
            
        </div>
    )
}
