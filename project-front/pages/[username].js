import Head from "next/head"
import styles from "../styles/Home.module.css"
import Nav from "../components/Nav"
import Profile from "../components/Profile"
import Projects from "../components/Projects"
import { useEffect } from "react"

export default function Home({ user, projects }) {
    return (
        <div className={styles.container}>
            <Head>
                <title>Projects</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Nav username={user.username} />
            <main className={styles.main}>
                <Profile username={user.username} name={user.name} />
                <Projects projects={projects} />
            </main>
        </div>
    )
}
export async function getServerSideProps(context) {
    const res = await fetch(
        `http://project-api_node_1:8080/projects/${context.params.username}`
    )
    const user = await res.json()
    if (!user) {
        return {
            notFound: true,
        }
    }
    const projects = []
    for (let i = 0; i < user.projects.length; i++) {
        let projectRes = await fetch(
            `http://project-api_node_1:8080/${user.projects[i].url}`
        )
        let projectData = await projectRes.json()
        await projects.push(projectData)
    }
    return {
        props: {
            user,
            projects,
        }, // will be passed to the page component as props
    }
}
