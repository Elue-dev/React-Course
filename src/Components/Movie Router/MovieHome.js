import React, { Component } from 'react'
import axios from 'axios'
import config from './config'
import { Link } from 'react-router-dom'

export class MovieHome extends Component {
    constructor(){
        super()
        this.state = {
            movieList: []
        }
    }


    componentDidMount(){
        const nowPlayingUrl = `https://api.themoviedb.org/3/movie/now_playing?api_key=${config.api_key}`;
        axios.get(nowPlayingUrl)
        .then((response) => {
            // console.log(response.data)
            const movieData = response.data.results //results = those arrays we saw when we console.log initially at line 18 before commenting it out
            this.setState({
                movieList: movieData
            })
        })
    }

    render() {
        // console.log(this.state.movieList)
        const imageUrl = "http://image.tmdb.org/t/p/w300";
        const newMovieState = this.state.movieList
        const movieGrid = newMovieState.map((movie, index) => {
            return(
                <div className="col s3" key = {index}>
                    <img src = {`${imageUrl}${movie.poster_path}`} />
                </div> //poster_path is of the array from the api
            )
        })
        return (
            <div className="row">
                {movieGrid}
            </div>
        )
    }
}

export default MovieHome

