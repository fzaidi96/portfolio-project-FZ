'use client'
import styles from "@/app/page.module.css";
import Link from "next/link";
import { useEffect } from 'react';
import { useRouter, usePathname, useSearchParams } from 'next/navigation'

export default function Project5() {
       
    return (
        <div>
            <main className={styles.projectpages}>
            <header>
                <nav className={styles.headernav}>
                <Link href="/">Home</Link>
                <Link href="/about">About</Link>
                <Link href="/projects">Work</Link>
                <Link href="/contact">Contact</Link>
              </nav>
            </header>
                <div className={styles.projecttitlecontainer}>
                    <h1 className={styles.projecttitle}>moodboard</h1>
                    <div className={styles.tagcontainer}><p className={styles.tags}>Group Project</p><p className={styles.tags}>SQL</p><p className={styles.tags}>Third-party API integration</p></div>
                </div>
            
                <div className={styles.projectinfocontainer}>
                <div className={styles.projectinfotext}>
                    <p><strong>About</strong></p>
                <p>Developed a moodboard app using JavaScript, integrating API calls to fetch and display images from Unsplash. Demonstrates expertise in asynchronous programming, DOM manipulation, event handling, and dynamic content rendering. Enhanced functionality with user selection, image liking, and seamless updates for an engaging user experience.</p></div>
                <Link href='https://moody-faa-esry.onrender.com/'><button className='deployment'>Visit live site</button></Link>
            </div>
            </main>
        </div>
    );
}