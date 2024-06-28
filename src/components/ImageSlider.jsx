'use client';

import { useState } from 'react';
import styles from '@/app/page.module.css';
import Image from 'next/image';
import Link from 'next/link';

const slides = [
  "project-1.png",
  "project-2.png",
  "project-3.png",
  "project-4.png",
  "project-5.png",
  "project-6.png",
];

const Container = ({ slides, currentIndex }) => {
  return (
    <div className={styles.carouselContainer} style={{ transform: `translateX(-${currentIndex * 350}px)` }}>
      {slides.map((src, index) => (
        <div key={index} className={styles.slide}>
          <Link href={`/projects/${src}`}>
            <Image
              src={`/images/${src}`}
              width={350}
              height={600}
              alt={`Slide ${index + 1}`}
              className={styles.projectimage}
            />
          </Link>
        </div>
      ))}
    </div>
  );
};

export default function ImageSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : slides.length - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex < slides.length - 1 ? prevIndex + 1 : 0));
  };

  return (
    <div className={styles.carouselWrapper}>
      <Container slides={slides} currentIndex={currentIndex} />
      <div className={styles.navButtons}>
        <p className={styles.navButton} onClick={handlePrev}>&lt;</p>
        <p className={styles.navButton} onClick={handleNext}>&gt;</p>
      </div>
    </div>
  );
}
