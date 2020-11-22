import React from 'react'
import Project from './Project'
const Projects = ({}) => {
    return (
        <div className="projects">
            <div className="projects-list">
                <div className="project-headers">
                    <div>Name</div>
                    <div>Description</div>
                    <div>Contributers</div>
                    <div>Commits</div>
                </div>
                <Project />
            </div>
            <style jsx>
                {`
                    .projects {
                        flex: 3 1 0;
                        background: yellow;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                    }
                    .projects-list {
                        height: 80%;
                        width: 80%;
                        background: grey;
                        padding: 5%;
                    }
                    .project-headers {
                        height: 70px;
                        display: flex;
                        align-items: center;
                        justify-content: space-around;
                    }
                    .project-headers div {
                        flex: 1 1 0
                    }
                `}
            </style>
        </div>
    )
}
export default Projects