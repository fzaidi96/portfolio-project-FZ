import Link from "next/link";
import styles from '@/app/page.module.css';
import Lenis from '@studio-freight/lenis';

export default function ProjectsPage() {
    return (
        <main style={{ overflowY: 'auto',overflowX: 'hidden', scrollBehavior: 'smooth' }} className={styles.main}>
            <header>
                <nav className={styles.headernav}>
                    <Link href="/">Home</Link>
                    <Link href="/projects">Work</Link>
                    <Link href="/contact">Contact</Link>
                </nav>
            </header>
            
            <div className={styles.container} id="section1">
                <h1 className={styles.workH1}>My Work</h1>
                <p className={styles.workP}><strong>All my past projects, content and work experience.</strong></p>
                <p className={styles.workP}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ac velit sed nisl dapibus bibendum ut ut ex. Ut feugiat, turpis quis laoreet vestibulum, nisl dui molestie purus, sed euismod arcu massa id ex. Suspendisse ultrices eleifend odio sed consequat. Cras interdum varius tristique. Phasellus semper vel arcu eu scelerisque. Maecenas dignissim ornare justo. Fusce vel sem et sapien feugiat condimentum in molestie odio.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ac velit sed nisl dapibus bibendum ut ut ex. Ut feugiat, turpis quis laoreet vestibulum, nisl dui molestie purus, sed euismod arcu massa id ex.</p>
                <nav>
                    <ul className={styles.navList}>
                        <li><Link href="#section2">• Coding</Link></li>
                        <li><Link href="#section3">• Socials</Link></li>
                        <li><Link href="#section4">• Copywriting</Link></li>
                        <li><Link href="#section5">• Design</Link></li>
                    </ul>
                </nav>
            </div>
            <div className={styles.container} id="section2">Web Development</div>
            <div className={styles.container} id="section3">Social Media Content</div>
            <div className={styles.container} id="section4">Copywriting</div>
            <div className={styles.container} id="section5">Brand & Design</div>
        </main>
    );
}