"use client";

import Image from "next/image";
import styles from "./page.module.css";
import { NameCard } from "./components/NameCard";
import React, { useEffect } from "react";
import { AboutPage } from "./components/AboutPage";
import { LinkPage } from "./components/LinkPage";

export default function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <NameCard />
      <AboutPage />
      <LinkPage />
    </>
  );
}
