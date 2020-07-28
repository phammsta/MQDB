import React, { useState, useEffect } from 'react';
import './App.css';
import MovieCard from "./components/MovieCard"
import MovieBoard from './components/MovieBoard';
import ControlledCarousel from './components/ControlledCarousel'
import Mainbar from './components/Mainbar'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Container, Row, Col, Navbar, Nav, Form, FormControl, NavDropdown } from 'react-bootstrap';


let count = 1

const apikey = `908a7d539329be6e6f4c2680b49b152d`
function App() {
  let [movieList, setMovieList] = useState(null)


  const callMovie = async () => {
    let url = `https://api.themoviedb.org/3/movie/top_rated?api_key=${apikey}&language=en-US&page=1`
    let result = await fetch(url)
    let data = await result.json()
    console.log("data", data)

    setMovieList(data.results)
  }

  const moreButton = async () => {
    count++
    let url = `https://api.themoviedb.org/3/movie/top_rated?api_key=${apikey}&language=en-US&page=${count}`
    let result = await fetch(url)
    let data = await result.json()
    movieList = movieList.concat(data.results)
    console.log(movieList);
    setMovieList(movieList);
  }



  // const searchByKeyword = (e) => {
  //   console.log("searchterms:", e.target.value)
  //   let filteredList = movieList.filter(movie => movie.title.includes(e.target.value))
  //   console.log("filter",filteredList)
  // } 

  useEffect(() => {
    callMovie()
    // searchByKeyword()
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
      <Mainbar />
      <ControlledCarousel />
      <br></br>
      <h1>hola</h1>

      <Container className="main">
        <MovieBoard movieList={movieList} />
      </Container>

      <button onClick={() => moreButton()}>More</button>

    </div>
  );
}

export default App;
