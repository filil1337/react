import React, { Component } from 'react';
import {Col} from 'react-bootstrap';

export default class Summary extends Component {
    render() {
      let backdropIMG = 'https://image.tmdb.org/t/p/original' + this.props.data.backdrop_path
  return (
  <Col xs={6} md={6}>
    <img className="poster" src={backdropIMG} alt="No image available."/>


  </Col>
  )
}
}
