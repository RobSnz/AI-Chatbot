import React from 'react';
import { Link} from "react-router-dom";
import "./FrontPage/style.css";

const FrontPage = () => (
    <div id="bg">
        <div className="btext">
            <h1>Westbourne</h1>
            <p>AI Helpdesk</p> 
            <Link to='/Selection' className="btn btn-outline-light">Get Started</Link>
        </div>

    </div>
)
export default FrontPage;