import React, { useEffect, useState } from "react";
import MovieCard from "../MovieCard";
import axios from "axios";
import { API_KEY } from "../../API_KEY";
import "./index.scss";
import { useSelector } from "react-redux";

const Serials = () => {
  const { fovarite } = useSelector((r) => r);
  console.log(fovarite);
  const [movies, setMovies] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const getMovies = (key, page) => {
    axios
      .get(`https://api.themoviedb.org/3/movie/popular`, {
        params: {
          api_key: key,
          language: "en-US",
          page: page,
        },
      })
      .then((res) =>
        setMovies((prevMovies) => [...prevMovies, ...res.data.results])
      )
      .catch((error) => console.error(error));
  };

  useEffect(() => {
    getMovies(API_KEY, currentPage);
  }, [currentPage]);

  const handleLoadMore = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  return (
    <div id="serials">
      <div className="container">
        <div className="serials">
          <h1>Рекомендации</h1>
          <div className="serials__block">
            {movies.map((el) => (
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

export default Serials;
