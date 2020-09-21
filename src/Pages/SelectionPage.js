import React from 'react';
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Card from "./SelectionPage/Cards";
import { motion } from "framer-motion";
import PageTransition from "./PageTransition";

function SelectionPage() {
    return (
        <motion.div className="" initial="out" animate="in" exit="out" variants={ PageTransition }>
            <Card />
        </motion.div>      
    );   
}

export default SelectionPage;