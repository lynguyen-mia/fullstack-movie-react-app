import React, { useState, useContext } from "react";
import styles from "./ResultList.module.css";
import { APIContext } from "../../store/api-context";
import useFetch from "../../hooks/use-fetch";
import MovieDetail from "../browse/MovieDetail";
import defaultPoster from "../../images/default-poster.jpeg";

const ResultList = (props) => {
  const ctx = useContext(APIContext);
  const token = ctx.token;

  const [seeDetails, setSeeDetails] = useState(false);
  const [movieDetails, setMovieDetails] = useState({});
  const [curId, setCurId] = useState(null);

  const { sendRequest: fetchMovie } = useFetch();
  const movieList = props.onShowResults;

  // FUNCTION: get movie's details
  async function onFetchMovieDetails(e, id) {
    // Scroll element into view
    const element = e.target; // Target element
    const headerOffset = 70;
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.scrollY - headerOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth"
    });

    // Check element id
    if (curId === id) {
      setSeeDetails(false);
      setCurId(null);
      return;
    }
    setCurId(id);

    // Fetch details of clicked movie
    const movieInfo = movieList.find((obj) => obj.id === id);

    // Fetch videos of clicked movie
    const videoConfig = {
      url: "https://movie-node-app.onrender.com/api/movies/video",
      method: "post",
      header: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token
      },
      body: { id: id }
    };
    const videoHandleFn = (data) => {
      // Store movie video data
      setMovieDetails({ videoData: data, details: movieInfo });
    };
    await fetchMovie(videoConfig, videoHandleFn);

    // Show movie detail section
    setSeeDetails(true);
  }

  return (
    <div className={styles["result-container"]}>
      <h2>Search Result</h2>
      <div className={styles["result-list"]}>
        {movieList.map((movie, index) => (
          <img
            key={index}
            src={
              movie.poster_path
                ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
                : defaultPoster
            }
            alt={movie.title}
            onClick={(e) => onFetchMovieDetails(e, movie.id)}
          />
        ))}

        {movieList.length === 0 && (
          <p className={styles["no-result"]}>No movie found.</p>
        )}

        {seeDetails && (
          <MovieDetail
            details={movieDetails}
            seeDetails={setSeeDetails}
            search={true}
          />
        )}
      </div>
    </div>
  );
};

export default ResultList;
