import React from 'react';
import "./app.css";
import {Link} from "react-router-dom";

function Nav()
{
    const navStyle = {
        color: "white"
    }
    return(
        <div>
        <nav>
            <div className = "logo">
                <h3>Westbourne</h3>
            </div>
            
            <ul className = "nav-links">

                <Link style = {navStyle} to = '/AI-Chatbot'>
                    <li>Home</li>
                </Link>

                <Link style = {navStyle} to = '/SelectionPage'>
                    <li>Selection</li>
                </Link>

                <Link style = {navStyle} to = '/about'>
                    <li>About</li>
                </Link>

            </ul>
        </nav>
        </div>
    );   
}

export default Nav;