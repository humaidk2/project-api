import Head from "next/head"
import styles from "../styles/Home.module.css"
import Nav from "../components/Nav"
import Profile from "../components/Profile"
import Projects from "../components/Projects"

export default function Home() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Projects</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Nav username="humaidk2" />
            <main className={styles.main}>
                <Profile />
                <Projects />
            </main>
        </div>
    )
}
