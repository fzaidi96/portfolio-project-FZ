"use client";
import Link from "next/link";
import styles from "./page.module.css";
import { useState, useEffect } from 'react';
import LoadingScreen from "@/components/LoadingScreen";
import { AnimatePresence, motion } from "framer-motion";
import Gallery from "@/components/Gallery";
import MobileAlert from "@/components/MobileAlert";

export default function Home() {
  const languages = ['hello.', 'hallo.','bonjour.','안녕하세요.','buongiorno.','.السلام علیکم']
  const [currentLanguageIndex, setCurrentLanguageIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [intervalId, setIntervalId] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [showOverlay, setShowOverlay] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timeout);
  }, []);

  const rotateLanguages = () => {
    const interval = setInterval(() => {
      setCurrentLanguageIndex((prevIndex) => (prevIndex + 1) % languages.length);
    }, 150); 

    setIntervalId(interval);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
    if (!intervalId) {
      rotateLanguages();
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setCurrentLanguageIndex(0);
    clearInterval(intervalId);
    setIntervalId(null);
  };

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <AnimatePresence mode="wait">
      {isLoading ? (
        <LoadingScreen />
      ) : (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          style={{ position: 'relative', width: '100%', height: '100%' }}
        >
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              backgroundColor: '#2D2D2D',
              zIndex: 10,
            }}
          />

          {/* Main Content */}
          <motion.main
            initial={{ opacity: 0, y: '100vh' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '100vh' }}
            transition={{ duration: 0.5 }}
            className={styles.main}
            style={{ position: 'relative', zIndex: 20 }}
          >
            <div className={styles.container1}>
              <div className={styles.welcome}>
                <h1>
                  <span onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                    {isHovered ? languages[currentLanguageIndex] : languages[0]}
                  </span>
                </h1>
                <h1>it&apos;s fatima</h1>
                <p className={styles.subheading}>developer, designer, creator</p>
              </div>
              <div>
                <nav className={styles.nav}>
                  <Link href="about">About</Link>
                  <Link href="/projects">Work</Link>
                  <Link href="/contact">Contact</Link>
                </nav>
              </div>
              <div className={styles.bubble1}></div>
            </div>

            <div className={styles.container2}>
              <Gallery />

            </div>
          </motion.main>
        </motion.div>
      )}
      <MobileAlert />
    </AnimatePresence>
  );
}
