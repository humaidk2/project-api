import React from "react"
import Project from "./Project"
const Projects = ({ projects }) => {
    return (
        <div className="projects">
            <h1>Projects</h1>
            <div className="projects-list">
                <div className="project-headers">
                    <div className="project-header">Name</div>
                    <div className="project-header project-header-description">
                        Description
                    </div>
                    <div className="project-header">Contributers</div>
                    <div className="project-header">Commits</div>
                </div>
                {projects.map((project) => (
                    <Project key={project.id} project={project} />
                ))}
            </div>
            <style jsx>
                {`
                    .projects {
                        flex: 3 1 0;
                        background: #f9f7f7;
                        display: flex;
                        flex-direction: column;
                        justify-content: center;
                        align-items: center;
                    }
                    .projects-list {
                        height: 80%;
                        width: 80%;
                        background: #112d4e;
                        padding: 5%;
                        box-shadow: 0 2.8px 2.2px rgba(17, 45, 78, 0.034),
                            0 6.7px 5.3px rgba(17, 45, 78, 0.048),
                            0 12.5px 10px rgba(17, 45, 78, 0.06),
                            0 22.3px 17.9px rgba(17, 45, 78, 0.072),
                            0 41.8px 33.4px rgba(17, 45, 78, 0.086),
                            0 100px 80px rgba(17, 45, 78, 0.12);
                        border-radius: 10px;
                    }
                    .project-headers {
                        height: 70px;
                        display: flex;
                        align-items: center;
                        justify-content: space-around;
                        padding: 5px;
                        border-radius: 5px;
                        color: #f9f7f7;
                    }
                    .project-header {
                        display: flex;
                        flex: 2 1 0;
                        text-align: center;
                        margin: 5px;
                    }
                    .project-header:last-child {
                        justify-content: center;
                    }
                    .project-header-description {
                        flex: 9 1 0;
                    }
                    // .project-header-description {
                    //     flex: 2 1 0;
                    // }
                `}
            </style>
        </div>
    )
}
export default Projects
