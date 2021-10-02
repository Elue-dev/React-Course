import React, { Component } from 'react'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import Movie from './Movie';
import MovieAbout from './MovieAbout'
import MovieHome from './MovieHome'

export class MovieApp extends Component {
    render() {
        return (
            <Router>
                <div>
                    <ul>
                        <li><Link to = "/">Home</Link></li>
                        <li><Link to = "/about">About</Link></li>
                    </ul>
                    <br/><br/>
                </div>
                <Route exact path = "/" component = {MovieHome} />
                <Route exact path = "/movie/:movieId" component = {Movie} />
                <Route exact path = "/about" component = {MovieAbout} />
                {/* <Route exact path = "/about/:who" component = {MovieAbout} />  */}  
                </Router>
        )
    }
}


export default MovieApp

//Params is a wildcard route, it is a dynamic route
//Instead of making individual routes for every single one of them, and copying and pasting
//we can have a wild card route


// LINE 23 EXPLAINATION
{/* This means we now have a route that react is going to serve up
if you go to the about page now, nothing would render
BUT, if you put anything after the /about, the page would render. eg put /about/wis
If you go to the console now and check match, check params which is an object,
has a property of who and a value of wis */}

//LINE 24 EXPLAINATION
{/* so we would have a path that would load for everything that has /movie/something..
that something would be available in props.match.movieId  */}

// const apiKey = "fec8b5ab27b292a68294261bb21b04a5";
// const nowPlayingUrl = "https://api.themoviedb.org/3/movie/now_playing";
// const singleMovieUrl = "https://api.themoviedb.org/3/movie/"
// const imageUrl = "http://image.tmdb.org/t/p/w300";