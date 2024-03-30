import React, { useState, useContext } from "react";
import { APIContext } from "../../store/api-context";
import NavBar from "../browse/NavBar";
import SearchForm from "./SearchForm";
import ResultList from "./ResultList";

const Search = () => {
  const ctx = useContext(APIContext);
  const token = ctx.token;

  const [searchResults, setSearchResults] = useState([]);
  const [showResult, setShowResult] = useState(false);

  // Find movies based on input query
  const onFindMovie = async (
    searchQuery,
    genre,
    type,
    lang,
    year,
    showResult = true
  ) => {
    try {
      const res = await fetch(
        `https://movie-node-app.onrender.com/api/movies/search?page=1&genre=${genre}&type=${type}&lang=${lang}&year=${year}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + token
          },
          body: JSON.stringify({ keyword: searchQuery })
        }
      );

      if (!res.ok) {
        console.error("Couldn't fetch search results");
      }

      const results = await res.json();
      setSearchResults(results.results);

      // Display search result
      setShowResult(showResult);
    } catch (err) {
      console.error(err.message);
    }
  };
  return (
    <div>
      <NavBar />
      <SearchForm onSearch={onFindMovie} />
      {showResult && <ResultList onShowResults={searchResults} />}
    </div>
  );
};

export default Search;
