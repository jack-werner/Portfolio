"use client";

import React, {useEffect, useState} from "react";
import styles from "./styles/name-card.module.css";
import { motion } from "framer-motion";
import { Name } from "./Name";
import { Mina } from "next/font/google";

export interface NameStyle {
    color: string,
    zIndex: number,
    fontSize: string,
}

export const NameCard = () => {
    const [height, setHeight] = useState(0);

    useEffect(() => {
        console.log("mounting");
        const handleScroll = () => {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            console.log({scrollTop}); 
            setHeight(scrollTop);
        }
        window.addEventListener('scroll', handleScroll); 

        return () => {
            window.removeEventListener('scroll', handleScroll);  
        }
    }, []);

    console.log({height});


    const colors: string[] = [
        "#FFFFFF",
        "#F7CB08",
        "#ED6E1F",
        "#EB2737",
        "#3B5FCC",
        "#24CBEC",
        // "#38A95A",
        // "#AC0FC8",
    ]

    // dynamically adjust the height and font size of the nav bar
    const maxHeight = 120;
    const minHeight = 10;

    const minFont = 2;
    const maxFont = 8.5;

    let divHeight = Math.max(minHeight, maxHeight-height);
    let divScale = (divHeight - minHeight)/(maxHeight-minHeight);

    let fontSize = minFont + (maxFont-minFont)*divScale;

    const position = (divHeight === minHeight) ? 'fixed': 'relative';

    const style = {
        height: `${divHeight}vh`,
        position: position,
    }

    // console.log({divScale});
    console.log({divHeight});
    console.log({position});
    console.log('\n')
    // console.log({fontSize});

    return (
        <div className={styles.container} style={style}>
            {colors.map((color, index) => {
                // console.log(color);
                const style: NameStyle = {
                    color: color,
                    zIndex: colors.length -1*index,
                    fontSize: `${fontSize}em`,
                }
                return (<Name key={index} order={index} style={style} scale={divScale}/>)
            })}
        </div>
    )
}