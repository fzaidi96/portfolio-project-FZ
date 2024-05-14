'use client'

import { useEffect, useRef, useState } from 'react';
import styles from '@/app/page.module.css'
import Image from 'next/image';
import Lenis from '@studio-freight/lenis'
import { useTransform, useScroll, motion } from 'framer-motion';

const images = [
    "1.png",
    "2.png",
    "3.png",
    "4.png",
    "5.png",
    "6.png",
]

export default function Gallery() {
    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start end', 'end start']
    })

    const y = useTransform(scrollYProgress, [0, 1], [0, 100])
    const y2 = useTransform(scrollYProgress, [1, 0], [0, 500])

    useEffect( () => {
        const lenis = new Lenis()
    
        function raf(time) {
          lenis.raf(time)
          requestAnimationFrame(raf)
        }

        requestAnimationFrame(raf)
    }, [])

    return (
        <main className={styles.main}>
            <div className={styles.spacer}></div>
            <div ref={container} className={styles.gallery}>
                <Column images={[images[1], images[2], images[3]]} y={y}/>
                <Column images={[images[4], images[5], images[6]]} y={y2}/>
            </div>
            <div className={styles.spacer}></div>
        </main>
    )
}

const Column = ({images, y=0}) => {
    return (
        <motion.div style={{y}} className={styles.column}>
            {
                images.map( (src, index) => {
                    return <div key={index} className= {styles.imageContainer}>
                <Image
                    src={`/images/${src}`}
                    fill
                    alt="image"
                 />
            </div>
    })
}
    </motion.div>
    )
}