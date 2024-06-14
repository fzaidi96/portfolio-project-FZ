import Link from "next/link";
import styles from '@/app/page.module.css';
import VideoGallery from "@/components/VideoGallery";
import Gallery from "@/components/Gallery";
import Image from "next/image";

export default function ProjectsPage() {
    return (
        <main className={styles.main}>
            <header>
                <nav className={styles.headernav}>
                    <Link href="/">Home</Link>
                    <Link href="/projects">Work</Link>
                    <Link href="/contact">Contact</Link>
                </nav>
            </header>
            
            <div className={styles.container} id="section1">
                <h1 className={styles.workH1}>My Work .</h1>
                <p className={styles.workP}><strong>All my past projects, content and work experience.</strong></p>
                <p className={styles.workP}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ac velit sed nisl dapibus bibendum ut ut ex. Ut feugiat, turpis quis laoreet vestibulum, nisl dui molestie purus, sed euismod arcu massa id ex. Suspendisse ultrices eleifend odio sed consequat. Cras interdum varius tristique. Phasellus semper vel arcu eu scelerisque. Maecenas dignissim ornare justo. Fusce vel sem et sapien feugiat condimentum in molestie odio.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ac velit sed nisl dapibus bibendum ut ut ex. Ut feugiat, turpis quis laoreet vestibulum, nisl dui molestie purus, sed euismod arcu massa id ex.</p>
                <nav>
                    <ul className={styles.navList}>
                        <li><Link href="#section2">• Coding</Link></li>
                        <li><Link href="#section3">• Socials</Link></li>
                        <li><Link href="#section4">• Copywriting</Link></li>
                        <li><Link href="#section5">• Branding & More</Link></li>
                    </ul>
                </nav>
            </div>

            {/* section two - coding */}
            <div className={styles.container} id="section2"> 
              <container className={styles.section2}>     
             <div className={styles.codingProjects}>
                    <h1>web dev</h1> 
                    <div className={styles.codingText}> <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ac velit sed nisl dapibus bibendum ut ut ex. Ut feugiat, turpis quis laoreet vestibulum, nisl dui molestie purus, sed euismod arcu massa id ex. Suspendisse ultrices eleifend odio sed consequat.Cras interdum varius tristique. Phasellus semper vel arcu eu scelerisque. Maecenas dignissim ornare justo. Fusce vel sem et sapien feugiat condimentum in molestie odio.Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p></div> 
                </div>
                <Image src="/images/berlin.jpg" height={600} width={350} alt="image"/>
                </container> 
                </div> 

              {/* section three - social media content */}
            <div className={styles.container} id="section3"><div className={styles.socialProjects}>
                    <h1>social content</h1> 
                    <div className={styles.socialText}> <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ac velit sed nisl dapibus bibendum ut ut ex. Ut feugiat, turpis quis laoreet vestibulum, nisl dui molestie purus, sed euismod arcu massa id ex. Suspendisse ultrices eleifend odio sed consequat.</p></div></div> 
                    <VideoGallery />
            </div>

            {/* section four - copywriting*/}
            <div className={styles.container} id="section4">
            <container className={styles.section4}>
                <div className={styles.copywritingExamples}><button>hello</button>
                <button>hello</button>
                <button>hello</button>
                <button>hello</button>
                </div>
                <p className={styles.copywritingText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ac velit sed nisl dapibus bibendum ut ut ex. Ut feugiat, turpis quis laoreet vestibulum, nisl dui molestie purus, sed euismod arcu massa id ex. Suspendisse ultrices eleifend odio sed consequat.</p>   
                <div className={styles.codingProjects}><h1>copywriting</h1></div>
             </container>
             </div>
                


            {/* section five - misc. */}
            <div className={styles.container} id="section5">
            <div className={styles.miscHeadline}>
                    <h1>& more</h1></div> 
                <div className={styles.miscContainer}>
                <div><Image src="/svg/evelyn.png" width={300} height={130} alt="evelyn logo" /> 
                <p className={styles.tagText}>lorem ipsum</p></div>
                        
                        
                        <div><Image src="/svg/bibak_logo.svg" width={200} height={130} alt="bibak logo" /><p className={styles.tagText}>lorem ipsum</p></div>

                          <div><Image src="/svg/inchief.png" width={400} height={130} alt="inchief logo" /><p className={styles.tagText}>lorem ipsum</p></div>

                </div>


            </div>
        </main>
    );
}