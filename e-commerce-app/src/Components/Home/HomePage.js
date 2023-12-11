import React from "react";
import { useNavigate } from "react-router-dom";
import "./HomePage.scss";
const HomePage = (props) => {
  const navigate = useNavigate();
  const handleRoute = (route) => {
    navigate(route);
  };
  return (
    <div className="container">
      {props.items.map((el) => (
        <div className="directory-item-container">
          <div
            className="background-image"
            style={{ backgroundImage: `url(${el.imageUrl})` }}
          />
          <div className="body" onClick={() => handleRoute(el.route)}>
            <h2>{el.title}</h2>
            <p>Shop Now</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HomePage;
