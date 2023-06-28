import React from "react";
import styles from "./styles/name-card.module.css";
import { motion } from "framer-motion";
import { Name } from "./Name";

export const NameCard = () => {
    return (
        <div className={styles.container}>
            <Name order={0}/>
            <Name order={1}/>
            <Name order={2}/>
            <Name order={3}/>
            <Name order={4}/>
        </div>
    )
}