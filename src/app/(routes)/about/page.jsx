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

export default function AboutPage() {
    return (
        <main className={styles.main}>
            <div className={styles.gallery}>
                <Column images={[images[1], images[2], images[3]]}/>
                <Column images={[images[4], images[5], images[6]]}/>
            </div>
        </main>
    )
}

const Column = ({images}) => {
    return (
        <div className={styles.column}>
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
    </div>
    )
}