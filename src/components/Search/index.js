import React, { useEffect, useState } from "react";
import MovieCard from "../MovieCard";
import axios from "axios";
import { API_KEY } from "../../API_KEY";
import { useParams } from "react-router-dom";

const Search = () => {
  const [mov, setMov] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const { movieName } = useParams();

  const getMovies = (key, page) => {
    axios
      .get(`https://api.themoviedb.org/3/search/movie`, {
        params: {
          api_key: key,
          query: movieName,
          language: "en-US",
          page: page,
        },
      })
      .then((res) => {
        const newMovies = res.data.results;
        if (currentPage === 1) {
          setMov(newMovies);
        } else {
          setMov((prevMovies) => [...prevMovies, ...newMovies]);
        }
      })
      .catch((error) => console.error(error));
  };

  useEffect(() => {
    getMovies(API_KEY, currentPage);
  }, [currentPage, mov]);

  const handleLoadMore = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  return (
    <div id="serials">
      <div className="container">
        <div className="serials">
          <h1>Рекомендации</h1>
          <div className="serials__block">
            {mov.map((el) => (
              <MovieCard el={el} key={el.id} />
            ))}
          </div>
          <div className="btn">
            <button onClick={handleLoadMore}>Показать еще</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
