import React from 'react'
import { Link } from 'react-router-dom'
import data from './photos.json'

const PhotoIndex = ({ match: { params } }) => (
  <div className="container">
    <nav className="breadcrumb" aria-label="breadcrumbs">
      <ul>
        <li>
          <Link to="/">
            <span className="icon">
              <i className="fas fa-home" aria-hidden="true" />
            </span>
            <span>Home</span>
          </Link>
        </li>
        <li className="is-active">
          <Link to={`/${params.category}`}>{data[params.category].title}</Link>
        </li>
      </ul>
    </nav>
    <h3 className="title">{data[params.category].title}</h3>
    <h4 className="subtitle">{data[params.category].description}</h4>
    <div className="columns is-multiline">
      {data[params.category].photos.map((photo, index) => (
        <div class="column" key={index}>
          <div className="card">
            <div className="card-content">
              <div className="card-image">
                <figure className="image">
                  <Link to={`/${params.category}/${index}`}>
                    <img src={photo.imageURL} alt={photo.title} />
                  </Link>
                  <figcaption>
                    <Link to={`/${params.category}/${index}`}>{photo.title}</Link>
                  </figcaption>
                </figure>
              </div>
              <div className="content" />
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
)

export default PhotoIndex
