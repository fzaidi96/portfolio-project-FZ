'use client'

import { useEffect, useRef, useState } from 'react';
import styles from '@/app/page.module.css'
import Image from 'next/image';
import Lenis from '@studio-freight/lenis'
import { useTransform, useScroll, motion } from 'framer-motion';
import Link from 'next/link';

const images = [
    "project-1.png",
    "project-2.png",
    "project-3.png",
    "project-4.png",
    "project-5.png",
    "project-6.png",
]

export default function Gallery() {
    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start end', 'end start']
    })

    const y = useTransform(scrollYProgress, [0, 1], [0, 10])
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
                <Column images={[images[0], images[1], images[2]]} y={y}/>
                <Column images={[images[3], images[4], images[5]]} y={y2}/>
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
                <Link href={`/projects/${src}`}>
                    <Image
                    src={`/images/${src}`}
                    fill
                    alt="image"
                 /></Link>
            </div>
    })
}
    </motion.div>
    )
}