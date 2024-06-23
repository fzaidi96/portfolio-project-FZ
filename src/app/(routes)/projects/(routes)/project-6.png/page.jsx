'use client'
import styles from "@/app/page.module.css";
import Link from "next/link";
import { useEffect } from 'react';
import { useRouter, usePathname, useSearchParams } from 'next/navigation'

export default function Project6() {
       
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
                    <h1 className={styles.projecttitle}>8-bit game</h1>
                    <div className={styles.tagcontainer}><p className={styles.tags}>Bootcamp Project</p><p className={styles.tags}>React JS</p><p className={styles.tags}>State Management</p><p className={styles.tags}>Game Mechanics</p></div>
                </div>
            
                <div className={styles.projectinfocontainer}>
                <div className={styles.projectinfotext}>
                    <p><strong>About</strong></p>
                <p>Built a Cookie Clicker app using React featuring an interactive cookie-clicking interface and a shop function for upgrades. Demonstrates proficiency in React hooks (useState, useEffect), state management, component rendering, and user interaction handling. Enhanced user experience with visual feedback and game reset functionality.</p></div>
                <Link href='https://main--ephemeral-gumdrop-7a1b95.netlify.app/'><button className='deployment'>Visit live site</button></Link>
            </div>
            </main>
        </div>
    );
}