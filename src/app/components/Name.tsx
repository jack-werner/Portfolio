"use client";

import React from "react";
import styles from "./styles/name.module.css";
import { easeOut, motion } from "framer-motion";
import { NameStyle } from "./NameCard";

interface NameProps {
    order: number;
    style: NameStyle;
    scale: number;
}

export const Name: React.FC<NameProps> = ({ order, style, scale }) => {
    const flyInVariants = {
        initial: {
            opacity: 1,
            y: '-200%',
            x: '150%',
        }, 
        animate: {
            opacity: 1,
            y: `${-3.5*order*scale}px`, 
            x: `${3.5*order*scale}px`,
            skewY: '5deg',
            transition: {
                delay: 0.05*order,
                duration: 1.5,
                ease: 'easeOut'
            }
        }
    };


    return (
        <motion.div 
            className={styles.name}
            initial="initial"
            animate="animate"
            variants={flyInVariants}
            style={style}
        >
            jack werner
        </motion.div>
    )
}