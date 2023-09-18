"use client";

import React, { useEffect, useState } from "react";
import styles from "./styles/name-card.module.css";
import { Name } from "./Name";

export interface NameStyle {
  color: string;
  zIndex: number;
  fontSize: string;
}

export const NameCard = () => {
  const [height, setHeight] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      console.log({ scrollTop });
      setHeight(scrollTop);
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  let colors: string[] = [
    "#FFFFFF",
    "#F7CB08",
    "#ED6E1F",
    "#EB2737",
    "#3B5FCC",
    "#24CBEC",
    // "#38A95A",
    // "#AC0FC8",
  ];

  // dynamically adjust the height and font size of the nav bar
  const maxHeight = 120;
  const minHeight = 10;

  let divHeight = Math.max(minHeight, maxHeight - height);
  let divScale = (divHeight - minHeight) / (maxHeight - minHeight);

  let bgColor = "#000";
  let fontColor = "#fff";

  if (height > 800) {
    bgColor = "#fff";
    colors[0] = "#000";
  }

  const style = {
    height: `${divHeight}vh`,
    color: fontColor,
    "background-color": bgColor,
  };

  return (
    <div className={styles.container} style={style}>
      {colors.map((color, index) => {
        const style = {
          color: color,
          zIndex: colors.length - 1 * index,
          fontSize: `clamp(2.5em, 10vw, ${divHeight * 1.5}px)`,
        };
        return (
          <Name key={index} order={index} style={style} scale={divScale} />
        );
      })}
    </div>
  );
};
