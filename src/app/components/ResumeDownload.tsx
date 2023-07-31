import {motion} from 'framer-motion';

import styles from './styles/resume-download.module.css'



export const ResumeDownload = () => {
    const containerVariants = {
        normal: {
            scale: 1,
            boxShadow: "5px 5px 10px rgba(0, 0, 0, 0.6)",
        },
        hover: {
            scale: 1.1,
            boxShadow: "10px 10px 10px rgba(0, 0, 0, 0.3)",
        },
    };
    
    const textVariants = {
        normal: {
            width: 0,
        },
        hover: {
            width: "50%",
        },
    }

    const transition = {
        duration: 0.5, 
        ease: "easeInOut",
    };

    return (
        <motion.div 
            className={styles.button}
            variants={containerVariants}
            initial="normal"
            whileHover="hover"
            transition={transition}
        >
            <a href="/dinner-menu-july-2023.pdf" download="test.pdf">Resumé</a>
            <motion.span
                className={styles.underline}
                variants={textVariants}
                transition={transition}
            />    
        </motion.div>
    )
}