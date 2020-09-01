import React from 'react';
//import {Link} from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Nav from "./Nav";
import Card from "./Cards/Cards";
import {motion} from "framer-motion";
import PageTransition from "./PageTransition";

function SelectionPage()
{
    return(
        <motion.div
        initial = "out"
        animate ="in"
        exit = "out"   
        variants = {PageTransition}       
        >
            <Nav></Nav>
            <Card> </Card>
        </motion.div>
                 
    );   
}


export default SelectionPage;