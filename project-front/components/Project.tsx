import React from "react"
const Project = ({ project }) => {
    return (
        <div className="project">
            <div className="project-title">{project.title}</div>
            <div className="project-description">{project.description}</div>
            <div className="project-contributers">
                {project.contributers.join(", ")}
            </div>
            <div className="project-commits">{project.numOfCommits}</div>
            <style jsx>
                {`
                    .project {
                        height: 90px;
                        width: 100%;
                        border-radius: 10px;
                        padding: 5px;
                        display: flex;
                        background: #dbe2ef;
                        font-size: 0.9rem;
                    }
                    .project-title {
                        flex: 1 1 0;

                        display: flex;
                        align-items: center;
                        justify-content: center;
                    }
                    .project-description {
                        flex: 4 1 0;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                    }
                    .project-contributers {
                        flex: 1 1 0;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                    }
                    .project-commits {
                        flex: 1 1 0;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                    }
                `}
            </style>
        </div>
    )
}
export default Project
