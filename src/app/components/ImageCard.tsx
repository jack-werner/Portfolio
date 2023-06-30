import React, { useEffect, useRef, useState} from "react";
import { motion } from 'framer-motion';
import styles from "./styles/about-page.module.css";

export const ImageCard = () => {
    const imageRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const { top, bottom } = imageRef.current.getBoundingClientRect();        
            const isVisible = top < window.innerHeight && bottom >= 0;
            console.log({
                top,
                bottom,
                isVisible,
            })
            setIsVisible(isVisible);
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll(); // for checking visibility on initial render? seems bad to call twice?

        return () => {
            window.removeEventListener('scroll', handleScroll);
        }

    }, []);

    const variants = {
        hidden: {
            x: '-100%',
            opacity: 0.5,
            filter: 'blur(20px)',
        },
        visible: {
            x: 0,
            opacity: 1,
            filter: 'blur(0)',
            transition: {
                duration: 1,
            }
        }
    }

    return (
        <motion.img className={styles.image}
            ref={imageRef}
            src="https://i.imgur.com/nZwPqgx.jpg"  
            alt="Jack Werner Portfolio Picture"
            initial="hidden"
            animate={isVisible ? 'visible' : 'hidden'}
            variants={variants}
        />
    )

}