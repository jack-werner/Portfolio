import React, {useEffect, useState} from "react";
import { ImageCard } from "./ImageCard";
import styles from "./styles/about-page.module.css";
import { TextCard } from "./TextCard";

export const AboutPage = () => {
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

    const maxHeight = 120;
    const minHeight = 10;

    let divHeight = Math.max(minHeight, maxHeight-height);

    const style = {
        'margin-top': `${divHeight+10}vh`, // +10 to give some padding after the header
    }

    return(
        <div className={styles.background} style={style}>
            <ImageCard></ImageCard>
            <TextCard title="About Me"> 
                <p>
                    Hello! I'm Jack Werner, a Data/Full stack software engineer based in New York City. 
                    I have professional experience in <strong> Data Science</strong> and 
                    <strong> Data Engineering</strong>, and personal experience with 
                    <strong> Web Development</strong>, I built this site you're looking at right now! 
                    I am passionate about using software to enhance the joy discovering, learning 
                    about, and enjoying music. You can read about my different projects that I have 
                    undertaken in my blog.
                </p>
                <p>
                    In my personal life I also enjoy DJing and producing music. I also enjoy 
                    photography, Generative AI artwork, Surfing and snowboarding.
                </p>
            </TextCard>
        </div>
    )
}