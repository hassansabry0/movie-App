import React from "react";
import { useSelector } from "react-redux/es/hooks/useSelector";
import MovieCard from "../components/Navbar/MovieCard/MovieCard";

const Favorites = () => {
  const favorites = useSelector((state) => state.favorites.favorites);
  console.log(favorites);
  return (
    <>
      <h2 className="text-light border-bottom ">Favorites Movies </h2>

      <div className="row row-cols-1 row-cols-md-3 g-4 my-2 ">
        {favorites.map((movie) => {
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

export default Favorites;
