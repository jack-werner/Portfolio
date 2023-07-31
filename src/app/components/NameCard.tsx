"use client";

import React, {useEffect, useState} from "react";
import styles from "./styles/name-card.module.css";
import { Name } from "./Name";

export interface NameStyle {
    color: string,
    zIndex: number,
    fontSize: string,
}

export const NameCard = () => {
    const [height, setHeight] = useState(0);

    useEffect(() => {
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


    let colors: string[] = [
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

    const minFont = 4;
    const maxFont = 8;

    let divHeight = Math.max(minHeight, maxHeight-height);
    let divScale = (divHeight - minHeight)/(maxHeight-minHeight);

    let fontSize = minFont + (maxFont-minFont)*(divScale**2);
    // I want the font to start out at the max size and then shrink with the height of the div. 
    // I also want it to shrink with the size of the window so that it will not wrap on mobile

    /*
        So if div height is 100% we want the font width to be 8vw. Once the div starts shrinking,
        we want it to stay 8vw until 90% of the div is smaller. 
    */
    

    let bgColor = "#000"
    let fontColor = "#fff"

     if (height > 1000){
        bgColor = "#fff";
        colors[0] = "#000";
    }

    const style = {
        height: `${divHeight}vh`,
        color: fontColor,
        "background-color": bgColor,
    }

    console.log({divHeight});

    return (
        <div className={styles.container} style={style}>
            {colors.map((color, index) => {
                
                const style = {
                    color: color,
                    zIndex: colors.length -1*index,
                    // fontSize: `max(${divHeight*.9}px, 2.5vw)`,
                    // fontSize: `clamp(5em, 8vw, ${divHeight*.9}px)`,
                    fontSize: `clamp(2.5em, 10vw, ${divHeight*1.5}px)`,
                    // fontSize: `clamp(${divHeight*.9}px, 8vw, ${divHeight*.9}px)`,
                }
                return (<Name key={index} order={index} style={style} scale={divScale}/>)
            })}
        </div>
    )
}