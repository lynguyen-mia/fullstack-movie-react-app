import React from "react";
import styles from "./MovieList.module.css";
import MovieRow from "./MovieRow";

const MovieList = (props) => {
  const original = props.onRenderMovies.fetchNetflixOriginals;
  const trend = props.onRenderMovies.fetchTrending;
  const topRated = props.onRenderMovies.fetchTopRated;
  const action = props.onRenderMovies.fetchActionMovies;
  const adventure = props.onRenderMovies.fetchAventureMovies;
  const animation = props.onRenderMovies.fetchAnimationMovies;
  const comedy = props.onRenderMovies.fetchComedyMovies;
  const crime = props.onRenderMovies.fetchCrimeMovies;
  const drama = props.onRenderMovies.fetchDramaMovies;
  const family = props.onRenderMovies.fetchFamilyMovies;
  const fantasy = props.onRenderMovies.fetchFantasyMovies;
  const horror = props.onRenderMovies.fetchHorrorMovies;
  const music = props.onRenderMovies.fetchMusicMovies;
  const mystery = props.onRenderMovies.fetchMysteryMovies;
  const romance = props.onRenderMovies.fetchRomanceMovies;
  const science = props.onRenderMovies.fetchScienceMovies;
  const tv = props.onRenderMovies.fetchTVMovies;
  const thriller = props.onRenderMovies.fetchThrillerMovies;
  const war = props.onRenderMovies.fetchWarMovies;
  const western = props.onRenderMovies.fetchWesternMovies;
  const documentary = props.onRenderMovies.fetchDocumentaries;
  const history = props.onRenderMovies.fetchHistoryMovies;

  return (
    <div className={styles["movie-list"]}>
      {/* <MovieRow title="" movieArrAPI={original} original={true} /> */}
      <MovieRow title="TRENDING" movieArrAPI={trend} />
      <MovieRow title="TOP RATED" movieArrAPI={topRated} />
      <MovieRow title="ACTION" movieArrAPI={action} />
      <MovieRow title="ADVENTURE" movieArrAPI={adventure} />
      <MovieRow title="ANIMATION" movieArrAPI={animation} />
      <MovieRow title="COMEDY" movieArrAPI={comedy} />
      <MovieRow title="CRIME" movieArrAPI={crime} />
      <MovieRow title="DOCUMENTARIES" movieArrAPI={documentary} />
      <MovieRow title="DRAMA" movieArrAPI={drama} />
      <MovieRow title="FAMILY" movieArrAPI={family} />
      <MovieRow title="FANTASY" movieArrAPI={fantasy} />
      <MovieRow title="HISTORY" movieArrAPI={history} />
      <MovieRow title="HORROR" movieArrAPI={horror} />
      <MovieRow title="MUSIC" movieArrAPI={music} />
      <MovieRow title="MYSTERY" movieArrAPI={mystery} />
      <MovieRow title="ROMANCE" movieArrAPI={romance} />
      <MovieRow title="SCIENCE FICTION" movieArrAPI={science} />
      <MovieRow title="TV MOVIE" movieArrAPI={tv} />
      <MovieRow title="THRILLER" movieArrAPI={thriller} />
      <MovieRow title="WAR" movieArrAPI={war} />
      <MovieRow title="WESTERN" movieArrAPI={western} />
    </div>
  );
};

export default MovieList;
