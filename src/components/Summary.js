import React, { Component } from 'react';
import {Col} from 'react-bootstrap';

export default class Summary extends Component {
    render() {
      let backdropIMG = 'https://image.tmdb.org/t/p/original' + this.props.data.backdrop_path
  return (
  <Col xs={6} md={6}>
    <h1>{this.props.data.title}</h1>
    <p>{this.props.data.overview}</p>
    <h3>Rating:</h3>
    <p>{this.props.data.vote_average} / 10</p>
    <h3>Release date:</h3>
    <p>{this.props.data.release_date}</p>
    <h3>Original language:</h3>
    <p>{this.props.data.original_language.toUpperCase()}</p>

  </Col>
  )
}
}
