'use client';
import { useEffect, useRef, useState } from 'react';
import styles from '@/app/page.module.css';
import Lenis from '@studio-freight/lenis';
import { useTransform, useScroll, motion } from 'framer-motion';

const videos = [
  { src: "1.mp4", link: "https://www.tiktok.com/@bimbleapp/video/7075718511263223045?lang=en" },
  { src: "2.mp4", link: "https://www.tiktok.com/@bimbleapp/video/7114330414897990917?lang=en" },
  { src: "3.mp4", link: "https://www.tiktok.com/@bimbleapp/video/7125055594544876805?lang=en" },
  { src: "4.mp4", link: "https://www.tiktok.com/@bimbleapp/video/7124299129244716294?lang=en" },
  { src: "5.mp4", link: "https://www.instagram.com/reel/Cfb87bdInqa/" },
  { src: "6.mp4", link: "https://portfolio-project-fz.vercel.app/videos/6.mp4" },
  { src: "7.mp4", link: "https://portfolio-project-fz.vercel.app/videos/7.mp4" },
  { src: "8.mp4", link: "https://portfolio-project-fz.vercel.app/videos/8.mp4" },
  { src: "9.mp4", link: "https://portfolio-project-fz.vercel.app/videos/9.mp4" },
  { src: "10.mp4", link: "https://portfolio-project-fz.vercel.app/videos/10.mp4" },
  { src: "11.mp4", link: "https://www.instagram.com/reel/CfWp7DSouSE/" },
  { src: "12.mp4", link: "https://portfolio-project-fz.vercel.app/videos/12.mp4" },
]

const Column = ({ videos, y }) => {
  const handleFullscreenChange = () => {
    const fullscreenElement = document.fullscreenElement || document.webkitFullscreenElement || document.mozFullScreenElement || document.msFullscreenElement;
    if (fullscreenElement && fullscreenElement.classList.contains(styles.video)) {
      fullscreenElement.style.width = 'auto';
      fullscreenElement.style.height = '100%';
      fullscreenElement.style.objectFit = 'contain';
    }
  };

  useEffect(() => {
    document.addEventListener('fullscreenchange', handleFullscreenChange);
    document.addEventListener('webkitfullscreenchange', handleFullscreenChange);
    document.addEventListener('mozfullscreenchange', handleFullscreenChange);
    document.addEventListener('MSFullscreenChange', handleFullscreenChange);

    return () => {
      document.removeEventListener('fullscreenchange', handleFullscreenChange);
      document.removeEventListener('webkitfullscreenchange', handleFullscreenChange);
      document.removeEventListener('mozfullscreenchange', handleFullscreenChange);
      document.removeEventListener('MSFullscreenChange', handleFullscreenChange);
    };
  }, []);

  return (
    <motion.div 
      className={styles.videoColumn} 
      style={{ y }}
    >
      {videos.map((video, i) => (
        <div key={i} className={styles.videoContainer}>
          {video.link ? (
            <a href={video.link} target="_blank" rel="noopener noreferrer">
              <video className={styles.video} controls controlsList="nodownload" playsInline>
                <source src={`/videos/${video.src}`} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </a>
          ) : (
            <video className={styles.video} controls controlsList="nodownload" playsInline>
              <source src={`/videos/${video.src}`} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          )}
        </div>
      ))}
    </motion.div>
  );
}

export default function VideoGallery() {
  const gallery = useRef(null);
  const [dimension, setDimension] = useState({ width: 0, height: 0 });

  const { scrollYProgress } = useScroll({
    target: gallery,
    offset: ['start end', 'end start']
  });
  const { height } = dimension;
  const y = useTransform(scrollYProgress, [0, 1], [0, height * 2]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, height * 3.3]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, height * 1.25]);
  const y4 = useTransform(scrollYProgress, [0, 1], [0, height * 3]);

  useEffect(() => {
    const lenis = new Lenis();

    const raf = (time) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };

    const resize = () => {
      setDimension({ width: window.innerWidth, height: window.innerHeight });
    };

    window.addEventListener("resize", resize);
    requestAnimationFrame(raf);
    resize();

    return () => {
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <main className={styles.main}>
      <div className={styles.videoSpacer}></div>
      <div ref={gallery} className={styles.videoGallery}>
        <Column videos={[videos[0], videos[1], videos[2]]} y={y} />
        <Column videos={[videos[3], videos[4], videos[5]]} y={y2} />
        <Column videos={[videos[6], videos[7], videos[8]]} y={y3} />
        <Column videos={[videos[9], videos[10], videos[11]]} y={y4} />
      </div>
      <div className={styles.videoSpacer}></div>
    </main>
  );
}
