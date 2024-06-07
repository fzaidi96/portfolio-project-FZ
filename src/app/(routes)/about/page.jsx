'use client'

import styles from '@/app/page.module.css'
import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';


const images = [
    { src: "london.jpg", blurDataURL: "london-ph.jpg" },
    { src: "pakistan.jpg", blurDataURL: "pakistan-ph.jpg" },
    { src: "paris.jpg", blurDataURL: "paris-ph.jpg" },
    { src: "oxford.JPG", blurDataURL: "oxford-ph.jpg" },
    { src: "fatima.jpg", blurDataURL: "fatima-ph.jpg" },
    { src: "coffee.JPG", blurDataURL: "coffee-ph.jpg" },
    { src: "lisbon.JPG", blurDataURL: "lisbon-ph.jpg" },
    { src: "brussels.JPG", blurDataURL: "brussels-ph.jpg" },
    { src: "plant.JPG", blurDataURL: "plant-ph.jpg" },
    { src: "office.jpg", blurDataURL: "office-ph.jpg" },
];


const Column = ({images}) => {
    return (
        <div className={styles.columnAbout}>
            {
                images.map( (img, index) => {
                    return <div key={index} className= {styles.imageContainerAbout}>
                <Image
                    src={`/images/${img.src}`}
                    fill
                    alt="image"
                    placeholder='blur'
                    blurDataURL={img.blurDataURL}
                 />
            </div>
    })
}
    </div>
    )
}

export default function AboutPage() {
    return (
        <main className={styles.main}>
             <header>
                <nav className={styles.headernav}>
                <Link href="/">Home</Link>
                <Link href="/projects">Work</Link>
                <Link href="/contact">Contact</Link>
              </nav>
            </header>
            <motion.div className={styles.galleryAbout}>
                <Column images={[images[0], images[1], images[2], images[3], images[4]]}/> 
                <Column images={[images[5], images[6], images[7], images[8], images[9]]}/>
            </motion.div>
            <div className={styles.projectinfocontainer}>
            <h1 className={styles.aboutH1}>About Me.</h1>
                <div className={styles.projectinfotext}>
                <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ac velit sed nisl dapibus bibendum ut ut ex. Ut feugiat, turpis quis laoreet vestibulum, nisl dui molestie purus, sed euismod arcu massa id ex. Suspendisse ultrices eleifend odio sed consequat. Cras interdum varius tristique. Phasellus semper vel arcu eu scelerisque. Maecenas dignissim ornare justo. Fusce vel sem et sapien feugiat condimentum in molestie odio.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ac velit sed nisl dapibus bibendum ut ut ex. Ut feugiat, turpis quis laoreet vestibulum, nisl dui molestie purus, sed euismod arcu massa id ex. Suspendisse ultrices eleifend odio sed consequat. Cras interdum varius tristique. Phasellus semper vel arcu eu scelerisque. Maecenas dignissim ornare justo. Fusce vel sem et sapien feugiat condimentum in molestie odio.Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p></div>
            </div>

        </main>
    )
}
