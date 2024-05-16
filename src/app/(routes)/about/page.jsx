'use client'

import styles from '@/app/page.module.css'
import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';


const images = [
    "london.jpg",
    "pakistan.jpg",
    "paris.JPG",
    "oxford.JPG",
    "fatima.JPG",
    "coffee.JPG",
    "lisbon.jpg",
    "brussels.JPG",
    "plant.JPG",
    "office.jpg",
]

const Column = ({images}) => {
    return (
        <div className={styles.columnAbout}>
            {
                images.map( (src, index) => {
                    return <div key={index} className= {styles.imageContainerAbout}>
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
                <div className={styles.projectinfotext}>
                    <p><strong>About</strong></p>
                <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ac velit sed nisl dapibus bibendum ut ut ex. Ut feugiat, turpis quis laoreet vestibulum, nisl dui molestie purus, sed euismod arcu massa id ex. Suspendisse ultrices eleifend odio sed consequat. Cras interdum varius tristique. Phasellus semper vel arcu eu scelerisque. Maecenas dignissim ornare justo. Fusce vel sem et sapien feugiat condimentum in molestie odio.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ac velit sed nisl dapibus bibendum ut ut ex. Ut feugiat, turpis quis laoreet vestibulum, nisl dui molestie purus, sed euismod arcu massa id ex. Suspendisse ultrices eleifend odio sed consequat. Cras interdum varius tristique. Phasellus semper vel arcu eu scelerisque. Maecenas dignissim ornare justo. Fusce vel sem et sapien feugiat condimentum in molestie odio.Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p></div>
            </div>

        </main>
    )
}
