import Link from "next/link";
import styles from '@/app/page.module.css';
import VideoGallery from "@/components/VideoGallery";
import Gallery from "@/components/Gallery";
import Image from "next/image";

export default function ProjectsPage() {
    return (
        <main className={styles.main}>
            <header>
                <nav className={styles.projectsnav}>
                    <Link href="/">Home</Link>
                    <Link href="/projects">Work</Link>
                    <Link href="/contact">Contact</Link>
                </nav>
            </header>
            
            <div className={styles.container} id="section1">
                <h1 className={styles.workH1}>My Work .</h1>
                <p className={styles.workP}><strong>All my past projects, content and work experience.</strong></p>
                <p className={styles.workP}>Welcome to the whirlwind tour of my professional journey! From full stack web development to social media marketing and copywriting, I&apos;ve worn many hats and loved every moment of it. My journey started in digital marketing, having joined a grad scheme at a London agency where I was trained in PPC Search and Social. I soon found myself delving head first into the world of startup and before I knew it I was the marketing team!  Seeking to pivot into UI/UX and Product Management, I decided to learn web development and enrolled on bootcamp where I got hands on with coding and learned how to build the products I used to market.</p>
                
                <p className={styles.workP}> I&apos;ve worn many hats along my journey - I even translated work that got published! - but I&apos; come to find a real passion for creating and for solving problems. My range of experience means I bring a unique perspective to my work. Dive into my projects and see the full spectrum of my work, creativity, and experience. I promise you won&apos;t be bored!</p>
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
                    <div className={styles.codingText}> <p>I&apos;m fresh out of a 12-week full-time bootcamp in full stack web development where I got hands-on with HTML, CSS, JS, SQL. Passionate about UI/UX, I love creating dynamic and visually stunning web apps. I&apos;m able to integrate third-party APIs, storage services, and user authentication services into my builds. My projects demonstrate a range of skills including game mechanics, form validation, conditional rendering. My tech stack includes Node.js, Express.js, React, Next.js and Tailwind and in the meantime I&apos;m honing my skills with personal projects.
                    Take a look through my projects to learn more!</p></div> 
                </div>
                <Image src="/images/berlin.jpg" height={600} width={350} alt="image"/>
                </container> 
                </div> 

              {/* section three - social media content */}
            <div className={styles.socialContainer} id="section3"><div className={styles.socialProjects}>
                    <h1>social content</h1> 
                    <div className={styles.socialText}> <p>I&apos;ve spent the last few years in marketing;  starting out on a grad scheme in PPC before diving into startup, where I found myself managing the entire online presence for a new social app, Bimble! I was behind the email marketing, PR, blog releases, and more but I truly found my groove in creating and managing social media content, especially short-form video (thank you TikTok)! Check out some of my favourite creations below!</p></div></div> 
                    <VideoGallery />
            </div>

            {/* section four - copywriting*/}
            <div className={styles.container} id="section4">
            <container className={styles.section4}>
                <div className={styles.copywritingExamples}>
                    <div className={styles.img}><Link href="https://www.instagram.com/p/CgpbubjBFGe/"><Image src="/images/one.png" width={200} height={200} alt="social media"/></Link></div>
                    <div className={styles.img}><Link href="https://www.instagram.com/p/ChDSpA-LCHF/"><Image src="/images/two.png" width={200} height={200} alt="social media"/></Link></div>
                    <div className={styles.img}><Link href="https://www.instagram.com/p/CfzQJaShZn8/"><Image src="/images/three.png" width={200} height={200} alt="social media"/></Link></div>
                    <div className={styles.img}><Link href="https://www.instagram.com/p/CamLsaYsVfQ/"><Image src="/images/four.png" width={200} height={200} alt="social media"/></Link></div>
                    <div className={styles.img}><Link href="https://bimbleapp.medium.com/this-christmas-gift-with-bimble-1c7e97143325"><Image src="/images/five.png" width={200} height={200} alt="social media"/></Link></div>
                </div>
                <p className={styles.copywritingText}>I have a degree in literature so naturally I know and love good writing. And through my experience in marketing, I have come to know and love good copy. Some of my achiements include managing a blog with a readership of 20k, translating a text for publication in English and of course, writing 100s of social media captions. I&apos;ve selected some of my favourite posts that represent my best work.</p>   
                <div className={styles.codingProjects}><h1>copywriting</h1></div>
             </container>
             </div>
                


            {/* section five - misc. */}
            <div className={styles.container} id="section5">
            <div className={styles.miscHeadline}>
                    <h1>& more</h1></div> 
                <div className={styles.miscContainer}>
                
                <div><div><Image src="/svg/evelyn.png" width={300} height={130} alt="evelyn logo" />
                <div className={styles.moreWorkText}>
                <p className={styles.tagText}>• Crafted Evelyn`s go-to-market strategy •</p>
                <p className={styles.tagText}>• Delivered the brand identity •</p></div> 
                </div></div>
                        
                        
                        <div><div><Image src="/svg/bibak_logo.svg" width={400} height={130} alt="bibak logo" />
                        <div className={styles.moreWorkText}>
                        <p className={styles.tagText}>• Assisted on the launch of Sinema Transtopia •</p>
                        <p className={styles.tagText}>• Translated a German release into English for publication •</p></div>
                        </div></div>

                          <div><div><Image src="/svg/inchief.png" width={400} height={130} alt="inchief logo" />
                          <div className={styles.moreWorkText}>
                            <p className={styles.tagText}>• Collaborated on a global influencer campaign •</p>
                            <p className={styles.tagText}>• Achieved 10.3m video views on TikTok in 12 weeks •</p></div>
                        </div></div>
                          

                </div>


            </div>
        </main>
    );
}