import Link from "next/link"

export default function PageHeader() {
    return (<header className="header">
        <nav>
            <Link href="about">About</Link>
            <Link href="/projects">Projects</Link>
            <button>Contact</button>
        </nav>
    </header>)
}