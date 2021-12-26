import React, { useEffect, useState } from "react";
import axios from "axios";
import "../styles/Card.css";
import { AiOutlineSearch } from "react-icons/ai";

function Card() {
  const [datas, setDatas] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    axios
      .get("https://ghibliapi.herokuapp.com/films")
      .then((res) => setDatas(res.data));
  }, []);

  const handleSearch = (e) => {
    let value = e.target.value;
    setSearch(value);
  };

  return (
    <div className="container-search">
      <div className="pt-5 container">
        <h1 className="search-title text-center">
          Studio Ghibli Anime Movies
        </h1>
        <div className="d-flex justify-content-center mt-5">
          <input
            type="text"
            className="search-input"
            placeholder="Search"
            name="searchBar"
            id="searchBar"
            onChange={handleSearch}
          />
          <button className="search-btn">
            <AiOutlineSearch className="me-1" />
          </button>
        </div>
      </div>
      <div className="container pt-5 d-flex flex-wrap justify-content-between">
        {datas
          .filter((val) => {
            return val.title.toLowerCase().includes(search.toLowerCase());
          })
          .map((val) => {
            return (
              <div className="c-card">
                <div className="card">
                  <div className="card">
                    <div className="card__banner">
                      <div className="background">
                        <div className="c-background">
                          <div className="card__poster">
                            <img
                              src={val.image}
                              alt=""
                              width={150}
                              height={200}
                            />
                          </div>
                          <div className="card__banner__content">
                            <div className="__content">
                              <h3 className="__content__title">{val.title}</h3>
                              <p className="__content__director">
                                {val.director}
                              </p>
                              <p className="__content__release">
                                {val.release_date}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <img
                        src={val.movie_banner}
                        alt=""
                        width={500}
                        height={300}
                      />
                    </div>
                    <div className="card__description">
                      <div className="c-card__description">
                        <div className="card__description__text">
                          <p>{val.description}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default Card;
