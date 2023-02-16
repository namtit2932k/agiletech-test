import React from "react";
import FeatureCard from "../../components/FeatureCard/FeatureCard";
import "./Home.scss";
import { Link } from "react-router-dom";
import SlickSlider from "../../components/SlickSlider/SlickSlider";

const Home = ({ slider }) => {
  const featureList = [
    {
      id: 1,
      img: "img/f1.png",
      title: "Search Data",
      desc: "Don’t worry if your data is very large, the Data Warehoue provides a search engine, which is useful for making it easier to find data effectively saving time.",
    },
    {
      id: 2,
      img: "img/f2.png",
      title: "24 Hours Access",
      desc: "Access is given 24 hours a full morning to night and meet again in the morning, giving you comfort when you need data when urgent.",
    },
    {
      id: 3,
      img: "img/f3.png",
      title: "Print Out",
      desc: "Print out service gives you convenience if someday you need print data, just edit it all and just print it.",
    },
    {
      id: 4,
      img: "img/f4.png",
      title: "Security Code",
      desc: "Data Security is one of our best facilities. Allows for your files to be safer. The file can be secured with a code or password that you created, so only you can open the file.",
    },
  ];

  return (
    <div className="Home">
      {/*Hero*/}

      <div className="hero">
        <div className="hero-left">
          <h1 className="hero-title">Save your data storage here.</h1>
          <h3 className="hero-desc">
            Data Warehouse is a data storage area that has been tested for
            security, so you can store your data here safely but not be afraid
            of being stolen by others.
          </h3>
          <Link className="link" to="">
            <div className="button">Learn more</div>
          </Link>
        </div>
        <div className="hero-right">
          <img src="img/hero.png" alt="" />
        </div>
      </div>

      {/*Features*/}
      <div className="features">
        <h2 className="features-title">Features</h2>
        <h3 className="features-desc">
          Some of the features and advantages that we provide for those of you
          <br />
          who store data in this Data Warehouse.
        </h3>

        <div className="features-list">
          {featureList?.map((item) => (
            <div className="col" key={item.id}>
              <FeatureCard item={item}></FeatureCard>
            </div>
          ))}
        </div>
      </div>

      {/*testimonials*/}
      <div className="testimonials">
        <h1 className="testi-title">Testimonials</h1>
        <div className="slider">
          <SlickSlider />
        </div>
      </div>
    </div>
  );
};

export default Home;
