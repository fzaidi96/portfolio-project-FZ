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
                <div className={styles.abouttext}>
                <p> I&apos;m a 27-year-old Norfolk native who recently returned after spending a few vibrant years in London, Oxford and Berlin. My career has seen me wearing many hats, especially in the startup world, where I&apos;ve navigated the realms of marketing and product development. I kicked off at Bimble, an app for sharing and discovering places with friends, and my latest stint was in the fem-tech space, where I contributed to bringing a new brand to market. Collaborating with developers and designers throughout my career ignited my passion for UI/UX and product management, leading me to up my technical skill game and get hands on with coding on an intensive developer bootcamp! 
                When I&apos;m not deep into tech, you&apos;ll find me fulfilling all my basic needs with coffee and RuPaul&apos;s Drag Race. I&apos;m a film and literature girlie, having got my degree in languages from the University of Oxford (fun fact - I&apos;ve got a least a bit of working knowledge of all the languages on the homepage) and I think literally anything can be improved with a cat. Get in touch and we can chat design, branding and code or Modernist lit and all things K-Pop. I can yap about it all.</p></div>
            </div>

        </main>
    )
}
