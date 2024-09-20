'use client'
import styles from '@/app/page.module.css'
import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useEffect, useState } from 'react';


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
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Simulate loading time before the overlay is wiped away
        const timer = setTimeout(() => {
            setLoading(false);
        }, 2000); // 2 seconds delay

        return () => clearTimeout(timer);
    }, []);
    return (
        <main className={styles.main}>
            {loading && <div className={styles.aboutOverlay}></div>}
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
            <h1 className={styles.aboutH1}>About Me  .</h1>
                <div className={styles.abouttext}>
                <p> I&apos;m a 27-year-old Norfolk native who recently returned after spending a few vibrant years in London, Oxford and Berlin. My career spans marketing, community management and user-centred design, mainly in startups. I kicked off at Bimble, an app for sharing and discovering places with friends, and my latest stint was in the fem-tech space, where I contributed to bringing a new brand to market.
                Working closely with developers and designers sparked a passion for UI/UX and product management, which led me to get hands on wit coding on a bootcamp.
                I hold a degree in languages and linguistics from Oxford and I love coffee, RuPaul&apos;s Drag Race, film, and fashion darling. Let&apos;s chat design, branding, code or Kafka, K-Pop and cats - literally can yap about it all.</p></div>
            </div>
            <div className={styles.bubble2}></div>

        </main>
    )
}
