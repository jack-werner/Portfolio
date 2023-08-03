import React, {ReactNode, useState, useEffect, useRef} from "react";
import styles from './styles/text-card.module.css';
import { motion } from 'framer-motion';
import { ResumeDownload } from "./ResumeDownload";

export const TextCard: React.FC = () => {
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
            x: '50vw',
            opacity: 0.5,
            filter: 'blur(20px)',
            // display: 'None'
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
                About Me
            </div>
            <div className={styles.scroll}>
                <div className={styles.body}>
                    <p>
                        Hi! I'm Jack Werner, I'm a Software Engineer and DJ in Manhattan, NYC. 
                        I have experience in <strong>Data Engineering, Data Science, Data Analysis, and 
                        Web Development</strong>. I specifically enjoy working with <strong>Python, AWS, SQL, 
                        and Next.js</strong>. I build technology that enables the creation, discovery, 
                        and appreciation of music. Music is my greatest passion and using software 
                        to help people enjoy it as much as I do brings me great joy. 
                        You can follow the links below to see some projects I have undertaken in this 
                        area and click on the link below to see my Resume and view my past professional 
                        experience.
                    </p>
                    <p>
                        In my personal life I also enjoy DJing and producing music, photography, generative AI artwork, surfing and snowboarding. 
                        Keep scrolling to take a look at some of the other work I have done!
                    </p>
                </div>
            </div>
            <ResumeDownload/>
            <div className={styles.blur}></div>
        </motion.div>
    </>       
    )  
}