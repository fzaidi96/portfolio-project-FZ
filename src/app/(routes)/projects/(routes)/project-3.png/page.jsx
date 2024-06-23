'use client'
import styles from "@/app/page.module.css";
import Link from "next/link";
import { useEffect } from 'react';
import { useRouter, usePathname, useSearchParams } from 'next/navigation'

export default function Project3() {
       
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
                    <h1 className={styles.projecttitle}>space Y </h1>
                    <div className={styles.tagcontainer}><p className={styles.tags}>First Project</p><p className={styles.tags}>UI/UX</p><p className={styles.tags}>HTML, CSS, JS (vanilla)</p></div>
                </div>
            
                <div className={styles.projectinfocontainer}>
                <div className={styles.projectinfotext}>
                    <p><strong>About</strong></p>
                <p>Recreated the SpaceX landing page using HTML, CSS, and JavaScript. Designed a responsive layout with fixed navigation, interactive audio controls, and visually engaging sections with background images. Implemented JavaScript to control music playback, enhancing the user experience with dynamic and interactive elements.</p></div>
                <Link href='https://fzaidi96.github.io/spaceYtask/'><button className='deployment' >Visit live site</button></Link>
            </div>
            </main>
        </div>
    );
}