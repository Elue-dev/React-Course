import React from 'react'
import {Route, NavLink} from 'react-router-dom'
import HelpCustomer from './HelpCustomer'
import HelpHost from './HelpHost'

function About() {
    return (
        <div>
            <h1> About page Header</h1>
            <br/><br/> 
            <div className="link-flex">
                <NavLink to = "/about/customer">
                <p className = "render">Customer content</p>
                </NavLink>
                <NavLink to = "/about/host">
                <p className = "render">Host content</p>
                </NavLink>
            </div>
            <br/><br/>
            <Route path = "/about/customer" component = {HelpCustomer} />
            <Route path = "/about/host" component = {HelpHost} />
            <br/><br/>
            <h1>About page Footer</h1>
        </div>
    )
}

export default About
