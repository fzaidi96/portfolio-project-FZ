import Link from "next/link";
import styles from '@/app/page.module.css';

export default function ContactPage() {
    return (
        <main className={styles.main}>
             <header>
                <nav className={styles.headernav}>
                <Link href="/">Home</Link>
                <Link href="/projects">Work</Link>
                <Link href="/contact">Contact</Link>
              </nav>
            </header>
        <p>You can reach me on:</p>     
    </main>
);
};