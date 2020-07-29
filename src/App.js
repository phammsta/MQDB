import React, { useState, useEffect } from 'react';
import './App.css';
import MovieCard from "./components/MovieCard"
import MovieBoard from './components/MovieBoard';
import ControlledCarousel from './components/ControlledCarousel'

import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Container, Row, Col, Navbar, Nav, Form, FormControl, NavDropdown } from 'react-bootstrap';


let count = 1

const apikey = process.env.REACT_APP_API_KEY
function App() {
  let [movieList, setMovieList] = useState(null)
  let [keyword, setKeyword] = useState("");
  


  const callMovie = async () => {
    let url = `https://api.themoviedb.org/3/movie/popular?api_key=${apikey}&language=en-US&page=1`
    let result = await fetch(url)
    let data = await result.json()
    console.log("data", data)

    setMovieList(data.results)
  }

  const callTopRated = async () => {
    let url = `https://api.themoviedb.org/3/movie/top_rated?api_key=${apikey}&language=en-US&page=1`
    let result = await fetch(url)
    let data = await result.json()
    console.log("data", data)

    setMovieList(data.results)
  }

  const callInTheatres = async () => {
    let url = `https://api.themoviedb.org/3/movie/now_playing?api_key=${apikey}&language=en-US&page=1`
    let result = await fetch(url)
    let data = await result.json()
    console.log("data", data)

    setMovieList(data.results)
  }

  const searchByKeyword = async (e) => {
    console.log("hahaha")
    e.preventDefault();
    let url = `https://api.themoviedb.org/3/search/movie?api_key=${apikey}&language=en-US&page=1&query=${keyword}`;
    let result = await fetch(url);
    let data = await result.json();

    setMovieList(data.results);

  };

  const sortByRate = (direction) => {
    let sortedList;
    if (direction === "asc") {
      sortedList = movieList.sort((a, b) => a.vote_average - b.vote_average);
    } else {
      sortedList = movieList.sort((a, b) => b.vote_average - a.vote_average);
    }
    setMovieList([...sortedList]);
  };

  const moreButton = async () => {
    count++
    let url = `https://api.themoviedb.org/3/movie/popular?api_key=${apikey}&language=en-US&page=${count}`
    let result = await fetch(url)
    let data = await result.json()
    movieList = movieList.concat(data.results)
    console.log(movieList);
    setMovieList(movieList);
  }



  useEffect(() => {
    callMovie()

  }, [])

  if (movieList == null) {
    return (
      <div>
        <h1>Loading...</h1>
        <img src="https://thumbs.gfycat.com/FalseHeavenlyGoshawk-size_restricted.gif" alt="interstellar-wormhole"></img>
      </div>
    )
  }

  return (
    <div className="mainbackground">

      <div className="mainbar">
        <Navbar bg="dark" variant="dark">

          <Nav className="mr-auto navpad2">
            <Nav.Link onClick={() => callMovie()} href="#home">Featured</Nav.Link>
            <Nav.Link onClick={() => callTopRated()} href="#features">Top Rated</Nav.Link>
            <Nav.Link onClick={() => callInTheatres()} href="#features">In Theatres</Nav.Link>
            
          </Nav>

          <Navbar.Brand className="navpad" href="#home">MQDB</Navbar.Brand>

          <Form className="navpad3" inline onSubmit={(e) => searchByKeyword(e)}>
            <FormControl
              type="text"
              placeholder="Search"
              className="mr-sm-2"
              onChange={(e) => setKeyword(e.target.value)}
            />
            <Button variant="outline-light" type="submit">
              Search
          </Button>
          </Form>

        </Navbar>
      </div>

      <ControlledCarousel />

      <br></br>
      <h1 className="subheading">MQDataBase</h1>
      <br></br>

      <Button className="ratingbtn" variant="outline-light" onClick={() => sortByRate("desc")}>Sort by rating</Button>

      <Container className="main">
        <MovieBoard movieList={movieList} />
      </Container>


      <Button className="morebtn" variant="outline-light" onClick={() => moreButton()}>More</Button>
    </div>
  );
}

export default App;
