import Head from "next/head"
import styles from "../styles/Home.module.css"
import Nav from "../components/Nav"
import Profile from "../components/Profile"
import Projects from "../components/Projects"
import { useEffect } from "react"

export default function Home({ data }) {
    return (
        <div className={styles.container}>
            <Head>
                <title>Projects</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Nav username={data.username} />
            <main className={styles.main}>
                <Profile />
                <Projects />
            </main>
        </div>
    )
}
export async function getServerSideProps(context) {
    const res = await fetch("http://project-api_node_1:8080/projects/humaidk2")
    const data = await res.json()
    if (!data) {
        return {
            notFound: true,
        }
    }
    const projects = []
    for (let i = 0; i < data.projects.length; i++) {
        let projectRes = await fetch(
            `http://project-api_node_1:8080/${data.projects[i].url}`
        )
        let projectData = await projectRes.json()
        await projects.push(projectData)
    }
    console.log(projects)
    return {
        props: {
            data,
        }, // will be passed to the page component as props
    }
}
