import React from 'react';
import "./about.css";
import { motion } from "framer-motion";
import PageTransition from "./PageTransition";

const About = props => {
    return(
        <div><h1>{props.loggedInStatus}</h1></div>
    );
};

// function About() {
//     return (
//         <motion.div className = "page" initial = "out" animate ="in" exit = "out" variants = {PageTransition}>
//             <h1 class="title is-1 is-spaced is-centerd">About</h1>
//             <p class="subtitle is-6 is-spaced" >Primar lorem ipsum dolor sit amet, consectetur adipiscing 
//                 elit lorem ipsum dolor. Pellentesque risus mi, tempus quis 
//                 placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla.
//             </p>
//         </motion.div>       
//     );   
// }

export default About;