import { React, useState, useEffect } from "react";
// import axios from "axios";
import MovieCard from "../components/Navbar/MovieCard/MovieCard";
import axiosInstance from "../network/config";

const Movies = (props) => {
  //   console.log(props);
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    axiosInstance
      .get()
      .then((response) => {
        // console.log(response.data.results);
        setMovies(response.data.results);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      <h2 className="text-light border-bottom ">Popular Movies </h2>
      <div className="row row-cols-1 row-cols-md-3 g-4 my-2 ">
        {movies.map((movie) => {
          return (
            <div className="col" key={movie.id}>
              <MovieCard movies={movie} />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Movies;
