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
                    <div className={styles.tagcontainer}><p className={styles.tags}>Bootcamp Project</p><p className={styles.tags}>UI/UX</p></div>
                </div>
            
                <div className={styles.projectinfocontainer}>
                <div className={styles.projectinfotext}>
                    <p><strong>About</strong></p>
                <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ac velit sed nisl dapibus bibendum ut ut ex. Ut feugiat, turpis quis laoreet vestibulum, nisl dui molestie purus, sed euismod arcu massa id ex. Suspendisse ultrices eleifend odio sed consequat. Cras interdum varius tristique. Phasellus semper vel arcu eu scelerisque. Maecenas dignissim ornare justo. Fusce vel sem et sapien feugiat condimentum in molestie odio. </p></div>
                <Link href='https://fz-fb.onrender.com/'><button className='deployment'>Visit live site</button></Link>
            </div>
            </main>
        </div>
    );
}