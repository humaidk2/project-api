import React from "react"
const Project = ({ project }) => {
    return (
        <div className="project">
            <div className="project-field">{project.title}</div>
            <div className="project-field project-description">
                {project.description}
            </div>
            <div className="project-field">
                {project.contributers.join(", ")}
            </div>
            <div className="project-field">{project.numOfCommits}</div>
            <style jsx>
                {`
                    .project {
                        height: 80px;
                        width: 100%;
                        border-radius: 10px;
                        padding: 5px;
                        display: flex;
                        background: #dbe2ef;
                        font-size: 0.9rem;
                        margin-top: 10px;
                        margin-bottom: 20px;
                    }
                    .project-field {
                        flex: 1 1 0;
                        display: flex;
                        align-items: center;
                        justify-content: flex-start
                        margin: 10px;
                    }
                    .project-description {
                        flex: 4 1 0;
                        display: flex;
                        align-items: center;
                        justify-content: flex-start;
                    }
                `}
            </style>
        </div>
    )
}
export default Project
