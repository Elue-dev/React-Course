import React from 'react'
import {Route, Link} from 'react-router-dom'
import HelpCustomer from './HelpCustomer'
import HelpHost from './HelpHost'

function About() {
    return (
        <div>
            <h1> About page Header</h1>
            <br/><br/> 
            <Link to = "/about/customer">
                Render the customer content
            </Link>
            <br/>
            <Link to = "/about/host">
                Render the host content
            </Link>
            <br/><br/>
            <Route path = "/about/customer" component = {HelpCustomer} />
            <Route path = "/about/host" component = {HelpHost} />
            <br/><br/>
            <h1>About page Footer</h1>
        </div>
    )
}

export default About
