import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux/es/exports";

const NavBar = () => {
  const favorites = useSelector((state) => state.favorites.currentFavorites); // to connect action with reducer
  return (
    <>
      <nav className="navbar navbar-expand navbar-light bg-danger">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/movies">
            Movies
          </Link>
          {/* <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button> */}
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/favorites"
                >
                  Favorites &nbsp;
                  <i className="bi bi-heart-fill"> {favorites}</i>
                </Link>
              </li>
              {/* <li className="nav-item">
                <a className="nav-link" href="#">
                  Features
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Pricing
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled">Disabled</a>
              </li> */}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
