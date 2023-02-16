import React from "react";
import { Link } from "react-router-dom";
import "./FeatureCard.scss";

const FeatureCard = ({ item }) => {
  return (
    <div className="card">
      <div className="card-img">
        <img src={item.img} alt="" />
      </div>
      <div className="card-content">
        <div className={`card-bg bg${item.id}`}></div>
        <h2 className="card-title">{item.title}</h2>
        <h3 className="card-desc">{item.desc}</h3>
        <Link className="link" to="">
          Learn more
        </Link>
      </div>
    </div>
  );
};

export default FeatureCard;
