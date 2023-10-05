"use client";

import React from "react";
import styles from "./styles/name.module.css";
import { motion } from "framer-motion";
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
      y: "-200%",
      x: "150%",
    },
    animate: {
      opacity: 1,
      y: `${-0.35 * order * scale}vw`,
      x: `${0.35 * order * scale}vw`,
      skewY: "5deg",
      transition: {
        delay: 0.05 * order,
        duration: 1.25,
        ease: "easeOut",
      },
    },
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
  );
};
