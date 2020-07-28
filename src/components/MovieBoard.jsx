import React from 'react'
import MovieCard from './MovieCard'
import {Row, Col } from 'react-bootstrap';


export default function MovieBoard(props) {
    let movieList = props.movieList
    return (
        <Row className="moviecontainer">
            {movieList.map(movie => {return(
                <Col md={3}> <MovieCard movie={movie}/></Col>
            )})}
            <br></br>
        </Row>
    )
}
