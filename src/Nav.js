import React from 'react';
import { Link } from "react-router-dom";
import styles from './mystyle.module.css';

function Nav() {
    const navStyle = {
        textDecoration: 'none',
        color: "white"
    }
    return (
        <nav className={ styles.nav }>
            <h3> Logo </h3>
            <ul className="nav-links">
                <Link style={navStyle} to='/AI-Chatbot'>
                    <li>Home</li>
                </Link>

                <Link style={navStyle} to='/SelectionPage'>
                    <li>Selection</li>
                </Link>

                <Link style={navStyle} to='/about'>
                    <li>About</li>
                </Link>
            </ul>
        </nav>
    );   
}

export default Nav;