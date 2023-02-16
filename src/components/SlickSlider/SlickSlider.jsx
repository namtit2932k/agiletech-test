import React from "react";
import Slider from "react-slick";
import { useEffect, useState } from "react";
import axios from "axios";
import "./SlickSlider.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SlickSlider = () => {
  const [slider, setSlider] = useState([]);
  useEffect(() => {
    async function getData() {
      const res = await axios.get("/galleries");
      return res;
    }
    getData().then((res) => setSlider(res.data));
    getData().catch((err) => console.log(err));
  }, []);

  var slickSettings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    arrow: true,
  };

  return (
    <Slider {...slickSettings}>
      {slider?.map((item) => (
        <div className="container" key={item.id}>
          <div className="tesimonial">
            <div className="testi-img">
              <img src={item.imageUrl} alt="" className="" />
            </div>
            <div className="testi-content">
              <h1>John Fang </h1>
              <h3>wordfaang.com</h3>
              <h2>{item.desctiption}</h2>
            </div>
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default SlickSlider;
