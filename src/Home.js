import React from "react";
import { Link } from "react-router-dom";
import data from "./photos.json";

const Home = () => (
  <div className="container">
    <nav className="breadcrumb" aria-label="breadcrumbs">
      <ul>
        <li className="is-active">
          <Link to="/">
            <span className="icon">
              <i className="fas fa-home" aria-hidden="true" />
            </span>
            <span>Home</span>
          </Link>
        </li>
      </ul>
    </nav>
    <div className="columns is-mobile">
      {Object.keys(data).map(category => (
        <div className="column" key={category}>
          <div className="card">
            <div className="card-content">
              <div className="content">
                <h2>
                  <Link to={`/${category}`}>{data[category].title}</Link>
                </h2>
                <p>{data[category].description}</p>
              </div>
            </div>
            <div className="card-image">
              <figure className="image">
                <img
                  src={data[category].photos[0].imageURL}
                  alt={data[category].photos[0].title}
                />
              </figure>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default Home;
