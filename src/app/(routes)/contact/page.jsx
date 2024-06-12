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
                <h1 className={styles.title}>Thanks for visiting .</h1>
                <div className={styles.email}>
                <p>• Get in touch by dropping me an email:</p>
                <button>f.zaidi182@gmail.com</button>
            </div>
            <div className={styles.socials}>
                <p>• Or catch me over on my socials:</p>
                <div className={styles.contactBar}><ContactBar /></div>
            </div>
            <div className={styles.credits}>
                    <Link href="#credits"><p><svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 6H11L7.5 10.5L4 6Z" fill="currentColor"></path></svg></p></Link>
                <div className={styles.credits} id="credits"><p>Grateful acknowledgment to the following for their invaluable resources, which made the creation of this portfolio possible:</p>
                <ul>
                    <li>
                        Tech Educators - all the staff and my cohort who got me through my 12 week bootcamp!
                    </li>
                </ul>


                <p>A heartfelt shout-out to these amazing creators for their incredibly helpful content and tutorials, making learning accessible for everyone:</p>
                 <ul>
                    <li>
                        Oliver Larose
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
                <p>All images are owned by me. All video content has been shot and edited by me. Disclaimer: I do not own the rights to the music used in the video content. All music is the property of its respective owners. </p>
            </div>
        </div>
        </div>   
    </main>
    
);
};