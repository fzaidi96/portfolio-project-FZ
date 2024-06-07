'use client';
import { useEffect, useRef, useState } from 'react';
import styles from '@/app/page.module.css';
import Lenis from '@studio-freight/lenis';
import { useTransform, useScroll, motion } from 'framer-motion';

const videos = [
  "1.mp4",
  "2.mp4",
  "3.mp4",
  "4.mp4",
  "5.mp4",
  "6.mp4",
  "7.mp4",
  "8.mp4",
  "9.mp4",
  "10.mp4",
  "11.mp4",
  "12.mp4",
]

export default function VideoGallery() {
  
  const gallery = useRef(null);
  const [dimension, setDimension] = useState({width:0, height:0});

  const { scrollYProgress } = useScroll({
    target: gallery,
    offset: ['start end', 'end start']
  })
  const { height } = dimension;
  const y = useTransform(scrollYProgress, [0, 1], [0, height * 2])
  const y2 = useTransform(scrollYProgress, [0, 1], [0, height * 3.3])
  const y3 = useTransform(scrollYProgress, [0, 1], [0, height * 1.25])
  const y4 = useTransform(scrollYProgress, [0, 1], [0, height * 3])

  useEffect( () => {
    const lenis = new Lenis()

    const raf = (time) => {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    const resize = () => {
      setDimension({width: window.innerWidth, height: window.innerHeight})
    }

    window.addEventListener("resize", resize)
    requestAnimationFrame(raf);
    resize();

    return () => {
      window.removeEventListener("resize", resize);
    }
  }, [])

  return (
    <main className={styles.main}>
      <div className={styles.videoSpacer}></div>
      <div ref={gallery} className={styles.videoGallery}>
        <Column videos={[videos[0], videos[1], videos[2]]} y={y}/>
        <Column videos={[videos[3], videos[4], videos[5]]} y={y2}/>
        <Column videos={[videos[6], videos[7], videos[8]]} y={y3}/>
        <Column videos={[videos[9], videos[10], videos[11]]} y={y4}/>
      </div>
      <div className={styles.videoSpacer}></div>
    </main>
  )
}

const Column = ({videos, y}) => {
  return (
    <motion.div 
      className={styles.videoColumn}
      style={{y}}
      >
      {
        videos.map( (src, i) => {
          return <div key={i} className={styles.videoContainer}>
            <video className={styles.video} controls controlslist="nofullscreen nodownload" playsInline>
              <source src={`/videos/${src}`} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        })
      }
    </motion.div>
  )
}