import React from "react";
import { useSelector } from "react-redux";
import MovieCard from "../MovieCard";

const Favorites = () => {
  const { fovarite } = useSelector((r) => r);
  console.log(fovarite);
  return (
    <div id="serials">
      <div className="container">
        <div className="serials">
          <div className="serials__block">
            {fovarite.slice(0, 10).map((el) => (
              <MovieCard el={el} key={el.id} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Favorites;
