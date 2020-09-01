import React from 'react';
import {Link} from "react-router-dom";
import "./style.css";

const FrontPage = () => (
    <div id="bg">
        <div class="btext">
            <h1>Westbourne</h1>
            <p>AI Helpdesk</p> 
            <Link to='/SelectionPage' className="btn btn-outline-light">Get Started</Link>   
        </div>

    </div>
)
export default FrontPage;