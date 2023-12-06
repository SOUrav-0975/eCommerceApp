import React from "react";
import "./HomePage.scss";
const HomePage = (props) => {
  return (
    <div className="container">
      {props.items.map((el) => (
        <div className="category-container">
          <div
            className="background-image"
            style={{ backgroundImage: `url(${el.imageUrl})` }}
          />
          <div className="category-body-container">
            <h2>{el.title}</h2>
            <p>Shop Now</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HomePage;
