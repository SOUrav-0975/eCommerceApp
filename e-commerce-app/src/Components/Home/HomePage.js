import React from "react";
import "./HomePage.scss";
const HomePage = (props) => {
  return (
    <div className="container">
      {props.items.map(({ title }) => (
        <div className="category-container">
          <div className="background-image" />
          <div className="category-body-container">
            <h2>{title}</h2>
            <p>Shop Now</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HomePage;
