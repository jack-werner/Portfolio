import { motion } from "framer-motion";

import styles from "./styles/link-page.module.css";

interface LinkCardProps {
  text: string;
  link: string;
}

export const LinkCard: React.FC<LinkCardProps> = ({ text, link }) => {
  const containerVariants = {
    normal: {
      scale: 1,
      boxShadow: "5px 5px 10px rgba(255, 255, 255, 0.6)",
    },
    hover: {
      scale: 1.1,
      boxShadow: "10px 10px 10px rgba(255, 255, 255, 0.3)",
    },
  };

  const textVariants = {
    normal: {
      width: 0,
    },
    hover: {
      width: "50%",
    },
  };

  const transition = {
    duration: 0.5,
    ease: "easeInOut",
  };

  return (
    <motion.div
      className={styles.link}
      variants={containerVariants}
      initial="normal"
      whileHover="hover"
      transition={transition}
    >
      <a href={link}>{text}</a>
      <motion.span
        className={styles.underline}
        variants={textVariants}
        transition={transition}
      />
    </motion.div>
  );
};
