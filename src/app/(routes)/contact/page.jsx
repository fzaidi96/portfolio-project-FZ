import Link from "next/link";
import styles from '@/app/page.module.css';
import ContactBar from "@/components/ContactBar";

export default function ContactPage() {
    return (
        <main className={styles.main}>
             <header>
                <nav className={styles.headernav}>
                <Link href="/">Home</Link>
                <Link href="/about">About</Link>
                <Link href="/projects">Work</Link>
              </nav>
            </header>
            <div className={styles.contactPage}>
                <h1 className={styles.title}>Contact me .</h1>
                <div className={styles.email}> <p>Drop me a message via any of the channels below!</p>
                <div className={styles.emailBox}><button><svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.20308 1.04312C1.00481 0.954998 0.772341 1.0048 0.627577 1.16641C0.482813 1.32802 0.458794 1.56455 0.568117 1.75196L3.92115 7.50002L0.568117 13.2481C0.458794 13.4355 0.482813 13.672 0.627577 13.8336C0.772341 13.9952 1.00481 14.045 1.20308 13.9569L14.7031 7.95693C14.8836 7.87668 15 7.69762 15 7.50002C15 7.30243 14.8836 7.12337 14.7031 7.04312L1.20308 1.04312ZM4.84553 7.10002L2.21234 2.586L13.2689 7.50002L2.21234 12.414L4.84552 7.90002H9C9.22092 7.90002 9.4 7.72094 9.4 7.50002C9.4 7.27911 9.22092 7.10002 9 7.10002H4.84553Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path></svg></button> <p>f.zaidi182@gmail.com</p></div>
            </div>
            <div className={styles.socials}>
                <div className={styles.contactBar}><ContactBar /></div>
            </div>
            <div><Link href="https://docs.google.com/document/d/1OHQsaCyyZKl6esbRgbZ6BrxqqlgStzYOmXeAuxDdKN8/edit?usp=sharing"><p>CV</p></Link></div>
            <div className={styles.credits}>
                    <Link href="#credits"><svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 6H11L7.5 10.5L4 6Z" fill="currentColor"></path></svg></Link>
                <div className={styles.credits} id="credits"><p>Grateful acknowledgment to the following for their invaluable resources, which made the creation of this portfolio possible:</p>
                <ul>
                    <li>
                        Tech Educators - all the staff and my cohort who got me through my 12 week bootcamp!
                    </li>
                </ul>


                <p>A heartfelt shout-out to these amazing creators for their incredibly helpful content and tutorials, making learning accessible for everyone:</p>
                 <ul>
                    <li>
                        Olivier Larose
                    </li>
                    <li>
                        Andres Gonzalez
                    </li>
                    <li>
                        Delba Oliveria
                    </li>
                    <li>
                        Wesley at ByteGrad
                    </li>
                </ul>

            <p>This portfolio has been built using the following and their respective documentation:</p>
                <ul>
                    <li>
                        Next.js 14
                    </li>
                    <li>
                        Framer Motion
                    </li>
                    <li>
                        Radix UI
                    </li>
                    <li>
                        Lenis
                    </li>
                </ul>
                <footer><p>All images are owned by me. All video content has been shot and edited by me. Disclaimer: I do not own the rights to the music used in the video content. All music is the property of its respective owners. </p></footer>
            </div>
        </div>
        </div>   
    </main>
    
);
};