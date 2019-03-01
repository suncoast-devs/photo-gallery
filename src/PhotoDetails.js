import React from 'react'
import { Link } from 'react-router-dom'
import data from './photos.json'

const PhotoIndex = ({ match: { params } }) => {
  const photo = data[params.category].photos[params.id]
  return (
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
          <li>
            <Link to={`/${params.category}`}>{data[params.category].title}</Link>
          </li>
          <li className="is-active">
            <Link to={`/${params.category}/${params.id}`}>{photo.title}</Link>
          </li>
        </ul>
      </nav>
      <h3 className="title">{photo.title}</h3>
      <figure className="image">
        <img src={photo.imageURL} alt={photo.title} />
      </figure>
      <p className="is-small">
        <a href={photo.sourceURL}>Source</a>
      </p>
    </div>
  )
}

export default PhotoIndex
