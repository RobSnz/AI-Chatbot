import React from 'react';
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Card from "./SelectionPage/Cards";
import { motion } from "framer-motion";
import PageTransition from "./PageTransition";
import Navigation from '../Navbar';

function SelectionPage() {
    return (
        <motion.div className="" initial="out" animate="in" exit="out" variants={ PageTransition }>
            <Navigation />
            <Card />
        </motion.div>      
    );   
}

export default SelectionPage;