import React, {ReactNode, useState, useEffect, useRef} from "react";
import styles from './styles/text-card.module.css';
import { motion } from 'framer-motion';
import { ResumeDownload } from "./ResumeDownload";

interface TextCardProps {
    title: string;
    children: ReactNode;
}

export const TextCard: React.FC<TextCardProps> = ({title, children}) => {
    const textRef = useRef(null);
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
        
        if (textRef.current) {
            observer.observe(textRef.current);
        }

        return () => {
            if (textRef.current) {
                observer.unobserve(textRef.current);
            }
        }
        
    }, []);

    const variants = {
        hidden: {
            x: '100%',
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

    return (<>
        <motion.div className={styles.card}
            initial="hidden"
            animate={isVisible ? 'visible': 'hidden'}
            variants={variants}
            ref={textRef}
        >
            <div className={styles.header}>
                {title}
            </div>
            <div className={styles.body}>
                {children}
            </div>
            <ResumeDownload/>
        </motion.div>
    </>
       
    )  
}