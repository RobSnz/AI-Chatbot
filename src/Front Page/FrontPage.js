import React from 'react';
import {Link} from "react-router-dom";
import "./style.css";
import PageTransition from "../PageTransition";
import {motion} from "framer-motion";

const FrontPage = () => (
    <motion.div 
    initial = "out"
    animate ="in"
    exit = "out"   
    variants = {PageTransition}
    id="bg">
        <div class="btext">
            <h1>Westbourne</h1>
            <p>AI Helpdesk</p> 
            <Link to='/SelectionPage' className="btn btn-outline-light">Get Started</Link>   
        </div>

    </motion.div>
)
export default FrontPage;