import React from 'react';
import "./app.css"
import {Link, withRouter} from "react-router-dom";

function Nav()
{
    const navStyle = {
        textDecoration: 'none',
        color: "white"
    }
    return(
        <nav>
            <h3> Logo </h3>
            <ul className = "nav-links">

                <Link style = {navStyle} to = '/AI-Chatbot'>
                    <li>Home</li>
                </Link>

                <Link style = {navStyle} to = '/selection'>
                    <li>Selection</li>
                </Link>

                <Link style = {navStyle} to = '/about'>
                    <li>About</li>
                </Link>

            </ul>

        </nav>
    );   
}

export default Nav;