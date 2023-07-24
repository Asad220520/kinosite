import React from "react";
import "./index.scss";
import { GoHeartFill } from "react-icons/go";
import { AiOutlineClockCircle } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import {
  addToFavorite,
  deleteFromFavorite,
} from "../redux/actions";
const MovieCard = ({ el }) => {
  const { fovarite } = useSelector((r) => r);
  const item = fovarite.find((find) => find.id === el.id);
  const dispath = useDispatch();
  return (
    <div className="movieCard">
      <div className="movieCard__img">
        <img
          src={`https://www.themoviedb.org/t/p/w220_and_h330_face/${el.poster_path}`}
          alt=""
        />
      </div>
      <div className="movieCard__title">
        <div className="movieCard__title-block">
          <span>
            <AiOutlineClockCircle size={"14px"} /> 2h 2m
          </span>
          <span
            onClick={() => {
              return item
                ? item.liked
                  ? dispath(deleteFromFavorite(el))
                  : ""
                : dispath(addToFavorite(el));
            }}
          >
            <GoHeartFill style={{
              color: item ? item.liked ? 'red' : '': ''
            }} className="icon" />
          </span>
        </div>
        <h2>{el.title.slice(0, 10)}</h2>
        <div className="movieCard__title-wrap">
          <p>Animation</p>
          <p>Action</p>
          <p>Adventure</p>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
