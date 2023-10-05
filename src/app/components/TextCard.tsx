import React, { ReactNode, useState, useEffect, useRef } from "react";
import styles from "./styles/text-card.module.css";
import { motion } from "framer-motion";
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
    };
  }, []);

  const variants = {
    hidden: {
      x: "50vw",
      opacity: 0.5,
      filter: "blur(20px)",
    },
    visible: {
      x: 0,
      opacity: 1,
      filter: "blur(0)",
      transition: {
        duration: 1,
      },
    },
  };

  return (
    <>
      <motion.div
        className="flex flex-col items-center justify-center rounded-3xl min-w-[50%] w-80 max-w-[90vw] shadow-2xl max-h-[60%]"
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
        variants={variants}
        ref={textRef}
      >
        <div className="flex flex-row justify-center p-4 bg-black w-full rounded-3xl rounded-b-none">
          <h2 className="text-white font-about font-bold text-4xl tracking-wide">
            About Me
          </h2>
        </div>
        {/* <div className={styles.scroll}> */}
        <div className="flex flex-col items-center p-4 overflow-scroll scroll-auto">
          {/* <div className={styles.body}> */}
          <div className="w-10/12 font-body font-extralight text-xs leading-loose indent-8">
            <p>
              Hi! I'm Jack Werner, I'm a Software Engineer in Manhattan, NYC. I
              have professional experience in{" "}
              <b>Data Engineering, Data Science, and Data Analysis</b> and have
              taught myself <b>Web Development</b>. I specifically enjoy working
              with <b>Python, AWS, SQL, Spark, and Next.js</b>. In my personal
              life I build technology that enables the creation, discovery, and
              appreciation of music. You can follow the links below to see some
              projects I have undertaken in this area and click on the link
              below to see my Resume and view my past professional experience.
            </p>
            <p>
              In my personal life I also enjoy DJing and producing music,
              photography, generative AI artwork, surfing and snowboarding. Keep
              scrolling to take a look at some of the other work I have done!
            </p>
          </div>
        </div>
        <div className="flex items-center justify-center bottom-0 w-full backdrop-blur-sm bg-gradient-to-b from-transparent to-gray-300 p-4 rounded-3xl rounded-t-none">
          <ResumeDownload />
        </div>
      </motion.div>
    </>
  );
};
