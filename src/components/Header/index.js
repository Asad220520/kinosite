import React, { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import "./index.scss";
import logo from "../../img/logo.svg";
import { AiOutlineHeart, AiOutlineUser } from "react-icons/ai";
import { useSelector } from "react-redux";

const Header = () => {
  const [value, setValue] = useState("");
  const { fovarite } = useSelector((r) => r);
  const nav = useNavigate();
  const getValue = (e) => {
    setValue(e.target.value);
  };
  const input = () => {
    if (value.trim() === "") {
      return null;
    } else {
      nav(`/movie/search/${value}`);
    }
  };
  return (
    <div id="header">
      <div className="container">
        <div className="header">
          <nav className="nav">
            <ul className="menu">
              <NavLink to={"/"}>
                <img src={logo} alt="" />
              </NavLink>
              <li className="menu__item">
                <NavLink to={"/serials"} className="menu__NavLink">
                  Сериалы
                </NavLink>
              </li>
              <li className="menu__item">
                <NavLink to={"/film"} className="menu__NavLink">
                  Фильмы
                </NavLink>
              </li>
              <li className="menu__item">
                <NavLink to={"/multFilm"} className="menu__NavLink">
                  Мультфильмы
                </NavLink>
              </li>
              <li className="menu__item">
                <NavLink to={"/podborki"} className="menu__NavLink">
                  Подборки
                </NavLink>
              </li>
            </ul>
            <div>
              <input onChange={getValue} type="search" placeholder="поиск..." />
              <button onClick={input}>Найти</button>
            </div>
            <div className="icons">
              <Link to={"/favorite"}>
                <AiOutlineHeart className="icon" />
                <sup className="length">{fovarite.length}</sup>
              </Link>
              <AiOutlineUser className="icon" />
            </div>
          </nav>
        </div>
        <hr />
      </div>
    </div>
  );
};

export default Header;
