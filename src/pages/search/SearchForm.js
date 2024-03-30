import React, { useRef } from "react";
import styles from "./SearchForm.module.css";

const SearchForm = (props) => {
  const searchRef = useRef(null);
  const genreRef = useRef(null);
  const typeRef = useRef(null);
  const languageRef = useRef(null);
  const yearRef = useRef(null);

  const onResetForm = () => {
    searchRef.current.value = "";
    genreRef.current.value = "All";
    typeRef.current.value = "All";
    languageRef.current.value = "All";
    yearRef.current.value = "";
  };

  const onSearchMovie = (e) => {
    const searchInput = searchRef.current.value;
    const genreInput = genreRef.current.value;
    const typeInput = typeRef.current.value;
    const languageInput = languageRef.current.value;
    let yearInput = yearRef.current.value;
    if (yearInput < 1700 || yearInput > 2023 || !yearInput) {
      yearInput = "All";
    }
    props.onSearch(
      searchInput,
      genreInput,
      typeInput,
      languageInput,
      yearInput,
      true
    );
    // onResetForm();
  };

  const onKeyDownHandler = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      onSearchMovie();
    }
  };

  return (
    <form>
      <div className={styles["search-form"]}>
        <div className={styles["search-box"]}>
          <input type="text" ref={searchRef} onKeyDown={onKeyDownHandler} />
          <svg
            className={`svg-inline--fa fa-search fa-w-16 ${styles["lookup-ic"]}`}
            fill="#ccc"
            aria-hidden="true"
            data-prefix="fas"
            data-icon="search"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <path d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"></path>
          </svg>
        </div>

        {/* Filter options */}
        <div className={styles["filter-options"]}>
          <div className={styles["filter-option"]}>
            <label htmlFor="genre">Genre:</label>
            <select name="genre" id="genre" ref={genreRef}>
              <option defaultValue="all">All</option>
              <option value="28">Action</option>
              <option value="12">Adventure</option>
              <option value="16">Animation</option>
              <option value="35">Comedy</option>
              <option value="80">Crime</option>
              <option value="99">Documentary</option>
              <option value="18">Drama</option>
              <option value="10751">Family</option>
              <option value="14">Fantasy</option>
              <option value="36">History</option>
              <option value="27">Horror</option>
              <option value="10402">Music</option>
              <option value="9648">Mystery</option>
              <option value="10749">Romance</option>
              <option value="878">Science Fiction</option>
              <option value="10770">TV Movie</option>
              <option value="53">Thriller</option>
              <option value="10752">War</option>
              <option value="37">Western</option>
            </select>
          </div>
          <div className={styles["filter-option"]}>
            <label htmlFor="type">Media type:</label>
            <select name="type" id="type" ref={typeRef}>
              <option defaultValue="all">All</option>
              <option value="movie">Movie</option>
              <option value="tv">TV</option>
              <option value="person">Person</option>
            </select>
          </div>
          <div className={styles["filter-option"]}>
            <label htmlFor="language">Language:</label>
            <select name="language" id="language" ref={languageRef}>
              <option defaultValue="all">All</option>
              <option value="en">English</option>
              <option value="ja">Japanese</option>
              <option value="ko">Korean</option>
            </select>
          </div>
          <div className={styles["filter-option"]}>
            <label htmlFor="year">Released year (between 1700 and 2023):</label>
            <input
              ref={yearRef}
              type="number"
              name="year"
              id="year"
              placeholder="All"
              defaultValue="all"
              min="1700"
              max="2023"
            />
          </div>
        </div>

        {/* Actions */}
        <div className={styles.actions}>
          <button type="button" onClick={onResetForm}>
            Reset
          </button>
          <button type="button" onClick={onSearchMovie}>
            Search
          </button>
        </div>
      </div>
    </form>
  );
};

export default SearchForm;
