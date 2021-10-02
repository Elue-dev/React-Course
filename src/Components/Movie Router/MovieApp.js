import React, { Component } from 'react'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import MovieAbout from './MovieAbout'
import MovieHome from './MovieHome'

export class MovieApp extends Component {
    render() {
        const apiKey = "fec8b5ab27b292a68294261bb21b04a5";
        const nowPlayingUrl = "https://api.themoviedb.org/3/movie/now_playing";
        const singleMovieUrl = "https://api.themoviedb.org/3/movie/"
        
const imageUrl = "http://image.tmdb.org/t/p/w300";
        return (
            <Router>
                <div>
                    <ul>
                        <li><Link to = "/">Home</Link></li>
                        <li><Link to = "/about">About</Link></li>
                    </ul>
                </div>
                <Route exact path = "/" component = {MovieHome} />
                {/* <Route exact path = "/about/us" component = {MovieAbout} />
                <Route exact path = "/about/company" component = {MovieAbout} />
                <Route exact path = "/about/investors" component = {MovieAbout} /> */}
                <Route exact path = "/about/:who" component = {MovieAbout} /> 
                {/* This means we now have a route that react is going to serve up
                if you go to the about page now, nothing would render
                BUT, if you put anything after the /about, the page would render. eg put /about/wis
                If you go to the console now and check match, check params which is an object,
                has a property of who and a value of wis */}
                </Router>
        )
    }
}


export default MovieApp

//Params is a wildcard route, it is a dynamic route
//Instead of making individual routes for every single one of them, and copying and pasting
//we can have a wild card route
