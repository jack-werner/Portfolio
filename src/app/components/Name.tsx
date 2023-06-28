"use client";

import React from "react";
import styles from "./styles/name.module.css";
import { easeOut, motion } from "framer-motion";

interface NameProps {
    order: number;
}

export const Name: React.FC<NameProps> = ({ order }) => {

    const flyInVariants = {
        initial: {
          opacity: 1,
          y: '-200%',
          x: '150%',
        },
        animate: {
          opacity: 1,
          y: `${-5*order}px`, 
          x: `${5*order}px`,
          transition: {
            delay: 0.25*order,
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
        >
            jack werner
        </motion.div>
    )
}