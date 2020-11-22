import React from 'react'
import Project from './Project'
const Projects = ({}) => {
    return (
        <div className="projects">
            <div className="projects-list">
                <div className="project-headers">
                    <div className="project-header">Name</div>
                    <div className="project-header project-header-description">Description</div>
                    <div className="project-header">Contributers</div>
                    <div className="project-header">Commits</div>
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
                        padding: 5px;
                        border-radius: 10px;
                    }
                    .project-header {
                        display: flex;
                        flex: 2 1 0;
                        text-align: center;
                        margin: 5px;
                    }
                    .project-header:last-child{
                        justify-content:center;
                    }
                    .project-header-description{
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