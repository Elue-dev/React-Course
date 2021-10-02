import React from 'react'
import { NavLink } from 'react-router-dom'
import '../Router/router.css'

function Navbar() {
    return (
        <div className= "nav">
            <nav className="container">
                <div className="logo" style = {{color: "rgb(0, 132, 255)"}}><h1>ROUTER</h1></div>
                <ul className="mainmenu">
                    <NavLink style = {{color: "#fff", textDecoration: "none"}} to = "/">
                        <li>Home</li>
                    </NavLink>

                    <NavLink style = {{color: "#fff" , textDecoration: "none"}} to = "/about">
                        <li>About</li>
                    </NavLink>

                    <NavLink style = {{color: "#fff" , textDecoration: "none"}} to = "/shop">
                        <li>Shop</li>
                    </NavLink>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar
