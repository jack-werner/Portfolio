"use client";

import Image from 'next/image'
import styles from './page.module.css'
import { NameCard } from './components/NameCard'
import React, {useEffect} from 'react';
import { AboutPage } from './components/AboutPage';

export default function Home() {
  console.log("SDAF");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (<>
      <NameCard/>
      <AboutPage/>
    </>
  )
}
