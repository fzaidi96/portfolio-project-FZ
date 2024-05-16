import Link from "next/link";
import styles from '@/app/page.module.css';

export default function ProjectsPage() {
    return (
        <main className={styles.main}>
             <header>
                <nav className={styles.headernav}>
                <Link href="/">Home</Link>
                <Link href="/about">About</Link>
                <Link href="/contact">Contact</Link>
              </nav>
            </header>

            <h1>My Work</h1>
        </main>
    )}