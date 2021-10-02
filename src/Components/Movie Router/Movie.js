import React, { Component } from 'react'
import config from './config'
import axios from 'axios'

export class Movie extends Component {
    constructor(){
        super()
        this.state = {
            movie: {}
        }
    }

    componentDidMount(){
        const mid = this.props.match.params.movieId //from line 20
        const singleMovieUrl = `https://api.themoviedb.org/3/movie/${mid}?api_key=${config.api_key}`
        axios.get(singleMovieUrl).then((response) => {
            console.log(response.data)
            this.setState({
                movie: response.data
            })
        })
    }

    render() {
        // console.log(this.props.match)
        if(this.state.movie.title === undefined){ 
            return (
                <h1>Loading...</h1>
            )
        }
        const movie = this.state.movie
        const imageUrl = `http://image.tmdb.org/t/p/w300${movie.poster_path}`;
        return (
            <div className= "container">
                {/* <h1>{this.props.match.params.movieId}</h1> */}
                <img style = {{width: "170px"}} src = {imageUrl} />
                <p>{movie.title}</p> <br/>
                <p>Budget: {movie.budget}</p> <br/>
                <p>Tagline: {movie.original_title}</p> <br/>
                <p>Overview: {movie.overview}</p> <br/>
            </div>
        )
    }
}

//LINE 8 EXPLAINATION
{/* match is built by the router, params is an object available in match
                then there would be a property on params for every single wildcard that matches movieId route
                and the wildcard we have established is called /:movieId, if you change it to x, the params will
                now be x, so instead of params.movieId it will be params.x, so you can name it anything you want */}

                {/* so next, all we need to do is to swap this id we are getting to the url so that it will bring out more info for that movie we clicked */}


//LINE 26 EXPLAINATION
// we did the if statement for the first time we are there, remember the render will run first before componentDidMount 
// where the axios request is. i.e that first time, we dont want to try to render any of the data cuz we don't have it yet

// So, remember, only one route is serving all of these, just the ids at the back of the url that's changing
export default Movie

