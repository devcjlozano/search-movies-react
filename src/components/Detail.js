import React, { Component } from 'react'
import { ButtonBackToHome } from './ButtonBackToHome'
import PropTypes from 'prop-types'

const API_KEY= '9450466f'

export class Detail extends Component {
  static propTypes = {
    match: PropTypes.shape({
      params: PropTypes.object,
      isExact: PropTypes.bool,
      path: PropTypes.string,
      url: PropTypes.string
    })
  }
  state = { movie: {} }
  _fetchMovie ({ id }) {
    fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&i=${id}`)
      .then(res => res.json())
      .then(movie => {
        this.setState({ movie })
      })
  }
  _goBack () {
    window.history.back()
  }
  componentDidMount () {
    const {id} = this.props.match.params
    this._fetchMovie({ id })
  }
  render() {
    const { Title, Poster, Actors, Metascore, Plot } = this.state.movie
    return(
      <div>
        <ButtonBackToHome />
        <h1>{ Title } </h1>
        <img src= {Poster} alt="movie poster" />
        <h3> {Actors} </h3>
        <span>{ Metascore }</span>
        <p>{ Plot }</p>
      </div>
    )
  }
}