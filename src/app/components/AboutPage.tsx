import React from "react";
import styles from "./styles/about-page.module.css";
import { TextCard } from "./TextCard";

export const AboutPage = () => {
    return(
        <div className={styles.background}>
            {/* <Photocard/>
             */}
            <img className={styles.image}
                src="https://i.imgur.com/nZwPqgx.jpg"  
                alt="Jack Werner Portfolio Picture"
            />
            <TextCard title="About Me"> 
            Hello! I'm Jack Werner, a Data/Full stack software engineer based in New York City. I have professional experience in Data Science and Data Engineering, and personal experience with Web Development, I built this site you’re looking at right now! I am passionate about using software to enhance the joy discovering, learning about, and enjoying music. You can read about my different projects that I have undertaken in my blog.
            In my personal life I also enjoy DJing and producing music. I also enjoy photography, Generative AI artwork, Surfing and snowboarding
            </TextCard>
        </div>
    )
}