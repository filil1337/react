import React, { Component } from 'react';

import SearchForm from './SearchForm';

import Poster from './Poster';
import Summary from './Summary';



export default class App extends Component {

constructor() {
  super();
  this.state = {
    title: 'Batman',
    overview: "The Dark Knight of Gotham City begins his war on crime with his first major enemy being the clownishly homicidal Joker, who has seized control of Gotham's underworld.",
    vote_average: 7,
    backdrop_path: "/2blmxp2pr4BhwQr74AdCfwgfMOb.jpg",
    release_date: " 1989-06-23",
    original_language: " En"
  }
}

fetchMovie(query) {
  let url = `https://api.themoviedb.org/3/search/movie?query=${query}&api_key=cfe422613b250f702980a3bbf9e90716`
  fetch(url).then((res) => res.json()).then((data) => {
    console.log(data.results)
    // update state with API data
    this.setState({
      title: data.results[0].original_title,
      overview: data.results[0].overview,
      backdrop_path: data.results[0].backdrop_path,
      vote_average: data.results[0].vote_average,
      release_date: data.results[0].release_date,
      original_language: data.results[0].original_language
    })
  })
}
render() {
  return(
  <div>
    <SearchForm doSearch={this.fetchMovie.bind(this)} data={this.state} />
    <Poster data={this.state} />
    <Summary data={this.state} />
  </div>
  )
}
}
