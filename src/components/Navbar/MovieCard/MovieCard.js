import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  setFavoritesMovies,
  removeFavoritesMovies,
} from "./../../../store/actions/favoritesMoviesAction";

const MovieCard = (props) => {
  let favorites = useSelector((state) => state.favorites.favorites); // to connect action with reducer and read value
  const dispatch = useDispatch(); // to write value in action
  const changeIcon = (event) => {
    if (event.target.classList.contains("bi-heart")) {
      event.target.classList.remove("bi-heart");
      event.target.classList.add("bi-heart-fill");
      props.movies.isFavorites = true;
      dispatch(setFavoritesMovies(props.movies));
      console.log(favorites);
    } else {
      event.target.classList.remove("bi-heart-fill");
      event.target.classList.add("bi-heart");
      props.movies.isFavorites = false;
      dispatch(removeFavoritesMovies(props.movies));
      console.log(favorites);
    }
  };
  return (
    <div className="card" style={{ height: "400px", overflow: "auto" }}>
      <img
        src={`https://image.tmdb.org/t/p/w500/${props.movies.poster_path}`}
        className="card-img-top h-75"
        alt="..."
      />
      <div className="card-body">
        <h5 className="card-title text-danger text-center">
          {props.movies.title}
        </h5>
        <p className="card-text">{props.movies.overview}</p>
        <div className="d-flex justify-content-around">
          <button className="btn btn-danger btn-outline-dark">
            <Link
              className=" text-decoration-none text-light"
              to={`/movie-details/${props.movies.id}`}
            >
              Go Details
            </Link>
          </button>
          <i
            className="bi bi-heart  text-danger "
            onClick={(e) => changeIcon(e)}
            style={{ cursor: "pointer" }}
          ></i>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
