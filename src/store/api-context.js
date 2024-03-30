import React, { useMemo, createContext } from "react";

const API_KEY = "9a455d806a595e3a9558a8da9c09a147";
const token = "RYoOcWM4JW";

const APIContext = createContext();

const APIContextProvider = (props) => {
  const requests = useMemo(
    () => ({
      fetchTrending: `https://movie-node-app.onrender.com/api/movies/trending`,
      fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_network=123`,
      fetchTopRated: `https://movie-node-app.onrender.com/api/movies/top-rate`,
      fetchActionMovies: `https://movie-node-app.onrender.com/api/movies/discover?genre=28&page=1`,
      fetchAventureMovies: `https://movie-node-app.onrender.com/api/movies/discover?genre=12&page=1`,
      fetchAnimationMovies: `https://movie-node-app.onrender.com/api/movies/discover?genre=16&page=1`,
      fetchComedyMovies: `https://movie-node-app.onrender.com/api/movies/discover?genre=35&page=1`,
      fetchCrimeMovies: `https://movie-node-app.onrender.com/api/movies/discover?genre=80&page=1`,
      fetchDocumentaries: `https://movie-node-app.onrender.com/api/movies/discover?genre=99&page=1`,
      fetchDramaMovies: `https://movie-node-app.onrender.com/api/movies/discover?genre=18&page=1`,
      fetchFamilyMovies: `https://movie-node-app.onrender.com/api/movies/discover?genre=10751&page=1`,
      fetchFantasyMovies: `https://movie-node-app.onrender.com/api/movies/discover?genre=14&page=1`,
      fetchHistoryMovies: `https://movie-node-app.onrender.com/api/movies/discover?genre=36&page=1`,
      fetchHorrorMovies: `https://movie-node-app.onrender.com/api/movies/discover?genre=27&page=1`,
      fetchMusicMovies: `https://movie-node-app.onrender.com/api/movies/discover?genre=10402&page=1`,
      fetchMysteryMovies: `https://movie-node-app.onrender.com/api/movies/discover?genre=9648&page=1`,
      fetchRomanceMovies: `https://movie-node-app.onrender.com/api/movies/discover?genre=10749&page=1`,
      fetchScienceMovies: `https://movie-node-app.onrender.com/api/movies/discover?genre=878&page=1`,
      fetchTVMovies: `https://movie-node-app.onrender.com/api/movies/discover?genre=10770&page=1`,
      fetchThrillerMovies: `https://movie-node-app.onrender.com/api/movies/discover?genre=53&page=1`,
      fetchWarMovies: `https://movie-node-app.onrender.com/api/movies/discover?genre=10752&page=1`,
      fetchWesternMovies: `https://movie-node-app.onrender.com/api/movies/discover?genre=37&page=1`
    }),
    []
  );

  return (
    <APIContext.Provider value={{ API_KEY, requests, token }}>
      {props.children}
    </APIContext.Provider>
  );
};

export { APIContext, APIContextProvider };
