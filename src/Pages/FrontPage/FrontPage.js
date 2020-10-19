import React from 'react';
import { Link} from "react-router-dom";
import "../FrontPage/style.css";
import { motion } from "framer-motion";
import PageTransition from "../PageTransition";

const FrontPage = () => (
    <motion.div initial = "out" animate ="in" exit = "out" variants = {PageTransition} id="bg">
        <div className="btext">
            <h1 style={{color: "#f9f3f4"}}>Westbourne</h1>
            <p>AI Helpdesk</p> 
            <Link to='/Selection' className="btn btn-outline-light">Get Started</Link>
        </div>
        
    </motion.div>
)
export default FrontPage;