import { React, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Loading from "../components/Loader/Loading";

const MovieDetails = () => {
  const params = useParams(); // to get id
  const [movieDetails, setMovieDetails] = useState([]);
  const [isLoading, setLoading] = useState(true);
  useEffect(() => {
    axios
      .get(`https://api.themoviedb.org/3/movie/${params.id}`, {
        params: {
          api_key: "4aad0ed6186b78dac8796280bde2fded",
        },
      })
      .then((response) => {
        setMovieDetails(response.data);
        // console.log(movieDetails);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
      });
  }, [params.id]);

  return (
    <>
      <h2 className="text-light border-bottom ">Movie Details </h2>

      <div className=" d-flex justify-content-center align-items-center">
        <img
          src={`https://image.tmdb.org/t/p/w500/${movieDetails.poster_path}`}
          alt="..."
        />
      </div>

      <div className="accordion" id="accordionPanelsStayOpenExample">
        <div className="accordion-item">
          <h2 className="accordion-header" id="panelsStayOpen-headingOne">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#panelsStayOpen-collapseOne"
              aria-expanded="true"
              aria-controls="panelsStayOpen-collapseOne"
            >
              <h5>Name</h5>
            </button>
          </h2>
          <div
            id="panelsStayOpen-collapseOne"
            className="accordion-collapse collapse show"
            aria-labelledby="panelsStayOpen-headingOne"
          >
            <div className="accordion-body">
              <strong className="text-danger">
                {movieDetails.original_title}
              </strong>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="panelsStayOpen-headingTwo">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#panelsStayOpen-collapseTwo"
              aria-expanded="false"
              aria-controls="panelsStayOpen-collapseTwo"
            >
              <h5>Release Date</h5>
            </button>
          </h2>
          <div
            id="panelsStayOpen-collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="panelsStayOpen-headingTwo"
          >
            <div className="accordion-body">
              <strong className="text-danger">
                {movieDetails.release_date}
              </strong>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="panelsStayOpen-headingThree">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#panelsStayOpen-collapseThree"
              aria-expanded="false"
              aria-controls="panelsStayOpen-collapseThree"
            >
              <h5>Vote Count</h5>
            </button>
          </h2>
          <div
            id="panelsStayOpen-collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="panelsStayOpen-headingThree"
          >
            <div className="accordion-body">
              <strong className="text-danger">{movieDetails.vote_count}</strong>
            </div>
          </div>
        </div>

        <div className="accordion-item">
          <h2 className="accordion-header" id="panelsStayOpen-headingFour">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#panelsStayOpen-collapseFour"
              aria-expanded="false"
              aria-controls="panelsStayOpen-collapseFour"
            >
              <h5>Rate</h5>
            </button>
          </h2>
          <div
            id="panelsStayOpen-collapseFour"
            className="accordion-collapse collapse"
            aria-labelledby="panelsStayOpen-headingFour"
          >
            <div className="accordion-body">
              <strong className="text-danger">
                {movieDetails.vote_average}
              </strong>
            </div>
          </div>
        </div>

        <div className="accordion-item">
          <h2 className="accordion-header" id="panelsStayOpen-headingFive">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#panelsStayOpen-collapseFive"
              aria-expanded="false"
              aria-controls="panelsStayOpen-collapseFive"
            >
              <h5>OverView</h5>
            </button>
          </h2>
          <div
            id="panelsStayOpen-collapseFive"
            className="accordion-collapse collapse"
            aria-labelledby="panelsStayOpen-headingFive"
          >
            <div className="accordion-body">
              <strong className="text-danger">{movieDetails.overview}</strong>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MovieDetails;
