import Image from "next/image";

export default function PageFooter() {
    return (<footer>
        <nav>
            <a href="https://www.instagram.com/p/C1nDMwYrQuF/"><Image src="./instagram.svg" alt="instagram logo" width={30} height={30}/></a>
            <a href="https://www.tiktok.com/@zzzachariah/video/7216709231293041963?lang=en"><Image src="./tiktok.svg" alt="tiktok logo" width={30} height={30}/></a>
            <a href="https://www.linkedin.com/feed/"><Image src="./linkedin.svg" alt="linkedin logo" width={30} height={30}/></a>
        </nav>
    </footer>)
}