'use client'
import styles from "@/app/page.module.css";
import Link from "next/link";
import { useEffect } from 'react';
import { useRouter, usePathname, useSearchParams } from 'next/navigation'

export default function Project1() {
       
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
                    <h1 className={styles.projecttitle}>message board</h1>
                    <div className={styles.tagcontainer}><p className={styles.tags}>Bootcamp Project</p><p className={styles.tags}>SQL</p><p className={styles.tags}>REST API</p><p className={styles.tags}>UI/UX</p><p className={styles.tags}>Node.JS</p><p className={styles.tags}>Express.JS</p></div>
                </div>
            
                <div className={styles.projectinfocontainer}>
                <div className={styles.projectinfotext}>
                    <p><strong>About</strong></p>
                <p>Developed a social media feed application using JavaScript, Express, and SQLite. Demonstrated skills include asynchronous API integration, dynamic DOM manipulation, and CRUD operations. Implemented user status management with client-side updates and server-side persistence, showcasing proficiency in full-stack web development and database handling.</p></div>
                <Link href='https://fz-fb.onrender.com/'><button className='deployment'>Visit live site</button></Link>
            </div>
            </main>
        </div>
    );
}