import React, {useEffect, useState} from "react";
import { ImageCard } from "./ImageCard";
import { ResumeDownload } from "./ResumeDownload";
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
        marginTop: `${divHeight+10}vh`, // +10 to give some padding after the header
    };

    return(
        <div className={styles.background} style={style}>
            <ImageCard></ImageCard>
            <TextCard title="About Me"> 
                <p>
                Hi! I'm Jack Werner, I'm a Software Engineer and DJ in Manhattan, NYC. 
                I have experience in <strong>Data Engineering, Data Science, Data Analysis, and 
                Web Development</strong>. I specifically enjoy working with <strong>Python, AWS, SQL, 
                and Next.js</strong>. I build technology that enables the creation, discovery, 
                and appreciation of music. Music is my greatest passion and using software 
                to help people enjoy it as much as I do brings me great joy. 
                You follow the links below to see some projects I have undertaken in this 
                area and click on the link below to see my Resume and view my past professional 
                experience.
                </p>
                <p>
                    In my personal life I also enjoy DJing and producing music, photography, generative AI artwork, surfing and snowboarding. 
                    Keep scrolling to take a look at some of the other work I have done.
                </p>
            </TextCard>
        </div>
    )
}