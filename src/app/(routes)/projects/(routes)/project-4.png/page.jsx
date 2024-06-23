'use client'
import styles from "@/app/page.module.css";
import Link from "next/link";
import { useEffect } from 'react';
import { useRouter, usePathname, useSearchParams } from 'next/navigation'

export default function Project4() {
       
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
                    <h1 className={styles.projecttitle}>brand blog</h1>
                    <div className={styles.tagcontainer}><p className={styles.tags}>Bootcamp Project</p><p className={styles.tags}>React JS</p><p className={styles.tags}>SQL</p><p className={styles.tags}>UI/UX</p></div>
                </div>
            
                <div className={styles.projectinfocontainer}>
                <div className={styles.projectinfotext}>
                    <p><strong>About</strong></p>
                <p>Created a blog hosting platform with Next.js, featuring categories, individual blog posts, and user comments. Utilized SQL for database interactions, showcasing skills in server-side rendering, dynamic routing, and state management. Enhanced user engagement through interactive comments and efficient content filtering by categories.</p></div>
                <Link href='https://week-8-assignment.vercel.app/urls/blog'><button className='deployment'>Visit live site</button></Link>
            </div>
            </main>
        </div>
    );
}