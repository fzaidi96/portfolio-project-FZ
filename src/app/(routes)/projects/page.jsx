import Link from "next/link";
import styles from '@/app/page.module.css';
import VideoGallery from "@/components/VideoGallery";
import Image from "next/image";

export default function ProjectsPage() {
    return (
        <main className={styles.main}>
            <header>
                <nav className={styles.projectsnav}>
                    <Link href="/">Home</Link>
                    <Link href="/about">About</Link>
                    <Link href="/contact">Contact</Link>
                </nav>
            </header>
            
            <div className={styles.container} id="section1">
                <h1 className={styles.workH1}>My Work .</h1>
                <p className={styles.workP}><strong>Past projects, content, and work experience.</strong></p>
                <p className={styles.workP}>Welcome to the whirlwind tour of my professional journey! From full stack web development to social media marketing and copywriting, I&apos;ve worn a lot of hats and learnt a lot along the way. My journey started in digital marketing, when I joined a grad scheme at a London agency and I soon found myself delving head first into the world of startup. Before I knew it, I <strong>was</strong> the marketing team! Looking to pivot into UI/UX and Product Management, I decided to learn web development and enrolled on a bootcamp where I got hands on with coding and learned how to build the products I used to market.</p>
                
                <p className={styles.workP}> The last few years have had me unearthing unexpected skills and passions - I even translated work that got published! - but I&apos;ve realised I thrive the most when solving problems and letting my creativity flow. My range of experience means I bring a unique perspective to my work. Dive into my projects and see the full spectrum of creativity, and experience. I promise you won&apos;t be bored!</p>
                <nav>
                    <ul className={styles.navList}>
                        <li><Link href="#section2">• Coding</Link></li>
                        <li><Link href="#section3">• Social Media</Link></li>
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
                    <div className={styles.codingText}> <p>I&apos;m fresh out of a full-time 12-week bootcamp in full stack web development where I got hands-on with HTML, CSS, JS, SQL. Passionate about UI/UX, I love creating dynamic and visually stunning web apps. I have the ability to integrate third-party APIs, cloud storage and user authentication services into my builds. My projects demonstrate a range of skills including conditional rendering, game mechanics, data validation. My tech stack includes Node.js, Express.js, React, Next.js and Tailwind. Since completing the bootcamp, I&apos;ve been honing my skills with personal projects.</p><p className={styles.CTA}><strong>Swipe through to check out my work!</strong></p></div> 
                </div>
                <Image src="/images/berlin.jpg" height={600} width={350} alt="image"/>
                </container> 
                </div> 

              {/* section three - social media content */}
            <div className={styles.socialContainer} id="section3"><div className={styles.socialProjects}>
                    <h1>social content</h1> 
                    <div className={styles.socialText}> <p>I&apos;ve spent the last few years in marketing;  starting out on a grad scheme in PPC before diving into startup, where I found myself managing the entire online presence for a new social app, Bimble. I was behind the email marketing, PR, blog releases and more, but I truly found my groove in creating and managing social media content, especially short-form video (thank you TikTok)!</p> <p className={styles.CTA}><strong>Watch some of my favourite content here!</strong></p></div></div> 
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
                <p className={styles.copywritingTextCTA}><strong>I&apos;ve selected posts below that represent my favourite work and style.</strong></p> <p className={styles.copywritingText}>I have a degree in literature so naturally I know and love good writing. And through my experience in marketing, I have also come to know and love good copy. Some of my achiements include managing a blog - editing every piece and writing my own - with a readership of 20k, translating a German text for publication in English, and of course, writing 100s of social media captions.</p>    
                <div className={styles.codingProjects}><h1>copywriting</h1></div>
             </container>
             </div>
                


            {/* section five - misc. */}
            <div className={styles.container} id="section5">
            <div className={styles.miscHeadline}>
                    <h1>& more</h1></div> 
                <div className={styles.miscContainer}>
                
                <div><div><Link href="https://www.evelynhealth.com/"><Image src="/svg/evelyn.png" width={300} height={130} alt="evelyn logo" /></Link>
                <div className={styles.moreWorkText}>
                <p className={styles.tagText}>• Crafted Evelyn&apos;s go-to-market strategy •</p>
                <p className={styles.tagText}>• Delivered the brand identity •</p></div> 
                </div></div>
                        
                        
                        <div><div><Link href="https://bi-bak.de/about-us"><Image src="/svg/bibak_logo.svg" width={400} height={130} alt="bibak logo" /></Link>
                        <div className={styles.moreWorkText}>
                        <p className={styles.tagText}>• Assisted on the launch of Sinema Transtopia •</p>
                        <p className={styles.tagText}><Link href="https://bi-bak.de/en/publikationen/bitte-zurueckspulen-1">• Translated a German release into English for publication •</Link></p></div>
                        </div></div>

                          <div><div><Link href="https://inchief.com/our-work/"><Image src="/svg/inchief.png" width={400} height={130} alt="inchief logo" /></Link>
                          <div className={styles.moreWorkText}>
                            <p className={styles.tagText}>• Collaborated on a global influencer campaign •</p>
                            <p className={styles.tagText}>• Achieved 10.3m video views on TikTok in 12 weeks •</p></div>
                        </div></div>
                </div>


            </div>
        </main>
    );
}