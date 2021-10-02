import React, { Component } from 'react'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import About from './About'
import Footer from './Footer'
import Home from './Home'
import Navbar from './Navbar'
import Shop from './Shop'

export class RouterApp extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Navbar />
                    <Route exact path= '/' render = {() => {
                        return <Home title = "Home page" description = "Home contents go here" />
                    }}/>
                    <Route path= '/about' component= {About} />
                    <Route path= '/shop' component= {Shop} />
                    {/* <Footer/> */}
                </div>
            </Router>
        )
    }
}

export default RouterApp
