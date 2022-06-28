import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <div className="carousel w-full">
      <div id="slide1" className="carousel-item relative w-full">
        <img
          src="https://149357172.v2.pressablecdn.com/wp-content/uploads/2017/07/image-6-500x480.jpg"
          className="w-full h"
          alt=""
        />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide4" className="btn btn-circle">
            ❮
          </a>
          <div className="title-style">
            <h1 className="text-3xl m-5 font-bold">Lightest Gets Lighter</h1>
            <h1 className="text-6xl m-5">ALL-NEW ONZO PEO</h1>
            <button className="m-5 button-style">Learn More</button>
          </div>
          <a href="#slide2" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
        <img
          src="https://149357172.v2.pressablecdn.com/wp-content/uploads/2017/07/image-500x480.jpg"
          className="w-full h"
          alt=""
        />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide3" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide1" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
