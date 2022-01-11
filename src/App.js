
import './App.css';
import React, { useState } from 'react'
import { MovieList } from './Component/MovieList';
import { movieData } from './Component/Data';
import AddMovie from './Component/AddMovie';
import {Navbar, Nav, Container} from 'react-bootstrap'
import FilterByName from './Component/FilterByName';
import RatingFilter from './Rating';
import MyFooter from './Component/MyFooter';


function App() {
  const [movies, setMovies] = useState(movieData);
  const [inputSearch, setInputSearch] = useState("");
  const [Rate, setRate] = useState(0);

    const add = (newMovie) => {
      setMovies ([...movies, newMovie])
    }

  return (
    <div className="App">
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">MOVIE APP</Navbar.Brand>
            <Nav className="me-auto">
              <AddMovie className= "addBtn" add= {add}/>
              <FilterByName  inputSearch={inputSearch} setInputSearch={setInputSearch}/>
              <div className="Filter">
              <RatingFilter isMovieRating={false} Rate={Rate} setRate={setRate} />
              </div>
            </Nav>
        </Container>
      </Navbar>
          <div className="MovieList">
            <MovieList movies={movies} inputSearch={inputSearch} Rate={Rate}/>
          </div>
          <MyFooter/>
    </div>
  );
}

export default App;