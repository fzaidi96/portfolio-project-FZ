'use client'
import styles from "@/app/page.module.css";
import Link from "next/link";
import { useEffect } from 'react';
import { useRouter, usePathname, useSearchParams } from 'next/navigation'

export default function Project2() {
       
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
                    <h1 className={styles.projecttitle}>local app</h1>
                    <div className={styles.tagcontainer}><p className={styles.tags}>Final Project</p><p className={styles.tags}>3rd-party UA integration</p><p className={styles.tags}>Next.JS</p><p className={styles.tags}>Tailwind</p></div>
                </div>
            
            
                <div className={styles.projectinfocontainer}>
                <div className={styles.projectinfotext}>
                    <p><strong>About</strong></p>
                <p>This project showcases the ability to build full-stack applications, integrating various technologies learned during the bootcamp to deliver a functional and user-friendly product.The app includes functionalities for creating, editing, and displaying posts, demonstrating proficiency in front-end development, server-side programming, and database management. Key features include dynamic form handling, data validation, user authentication, and seamless database interactions.</p></div>
                <Link href='https://community-app-blush.vercel.app/'><button className='deployment'>Visit live site</button></Link>
            </div>
            </main>
        </div>
    );
}