import React, { useEffect, useRef, useState} from "react";
import { motion } from 'framer-motion';
import styles from "./styles/about-page.module.css";

export const ImageCard = () => {
    const imageRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                } else {
                    setIsVisible(false);
                }
            });
        });

        if (imageRef.current) {
            observer.observe(imageRef.current);
        }

        return () => {
            if (imageRef.current) {
                observer.unobserve(imageRef.current);
            }
        }

    }, []);

    const variants = {
        hidden: {
            x: '-30%',
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