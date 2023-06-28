"use client";

import React from "react";
import styles from "./styles/name-card.module.css";
import { motion } from "framer-motion";
import { Name } from "./Name";

export interface NameStyle {
    color: string,
    zIndex: number,
}

export const NameCard = () => {
    const colors: string[] = [
        "#FFFFFF",
        "#F7CB08",
        "#ED6E1F",
        "#EB2737",
        "#3B5FCC",
        "#24CBEC",
        "#38A95A"
    ]

    console.log(colors);
    return (
        <div className={styles.container}>
            {colors.map((color, index) => {
                console.log(color);
                const style: NameStyle = {
                    color: color,
                    zIndex: colors.length -1*index,
                }
                return (<Name key={index} order={index} style={style}/>)
            })}
        </div>
    )
}