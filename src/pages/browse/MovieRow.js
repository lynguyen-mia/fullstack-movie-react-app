import React, { useEffect, useState, useContext } from "react";
import styles from "./MovieRow.module.css";
import Movie from "./Movie";
import useFetch from "../../hooks/use-fetch";
import MovieDetail from "./MovieDetail";
import { APIContext } from "../../store/api-context";

const MovieRow = (props) => {
  const ctx = useContext(APIContext);
  const token = ctx.token;

  const { sendRequest: fetchMovies } = useFetch();
  const [movieArr, setMovieArr] = useState([]);

  const [seeDetails, setSeeDetails] = useState(false);
  const [movieDetails, setMovieDetails] = useState({});
  const [curId, setCurId] = useState(null);

  // Render a row of movies
  useEffect(() => {
    const abortController = new AbortController();
    const originalConfig = {
      url: props.movieArrAPI,
      header: { Authorization: "Bearer " + token }
    };
    // Fetch movies of different types for each row
    fetchMovies(originalConfig, (data) => setMovieArr(data.results));
    // Stop the query by aborting on the AbortController on unmount
    return () => {
      abortController.abort();
    };
  }, []);

  // Render movie details upon clicking a movie
  async function onClickMovie(e, id, movie) {
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
      setSeeDetails((prevState) => !prevState);
      setCurId(null);
      return;
    }

    setCurId(id);

    // Fetch videos of clicked movie
    const movieConfig = {
      url: "https://movie-node-app.onrender.com/api/movies/video",
      method: "post",
      header: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token
      },
      body: { id: id }
    };

    const dataHandleFn = (data) => {
      // Store movie details
      setMovieDetails({ videoData: data, details: movie });
    };
    await fetchMovies(movieConfig, dataHandleFn);

    // Show movie detail section
    setSeeDetails(true);
  }

  return (
    <React.Fragment>
      <h2 className={styles["list-title"]}>{props.title}</h2>
      <div className={styles["movies-row"]}>
        <Movie
          originalType={props.original}
          movies={movieArr}
          onSelectMovie={onClickMovie}
        />
      </div>

      {seeDetails && (
        <MovieDetail details={movieDetails} seeDetails={setSeeDetails} />
      )}
    </React.Fragment>
  );
};

export default MovieRow;
