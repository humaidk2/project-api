import React from 'react'

const Project = () => {
    return (
        <div className="project">
            <div className="project-title">Storit</div>
            <div className="project-description">Lorem ipsum dolor, sit amet consectetur adipisicing elitquia quisquam beatae sed aut!</div>
            <div className="project-contributers">cool, done, john, tom, bret, fifty, fasfa,asf</div>
            <div className="project-commits">400</div>
            <style jsx>
                {`
                .project {
                    height: 70px;
                    width: 100%;
                    background: pink;
                    border-radius: 10px;
                    padding: 5px;
                    display: flex;
                }
                .project-title {
                    flex: 1 1 0;
                    
                    display: flex;
                    background: yellow;   
                }
                .project-description {
                    flex: 4 1 0;
                    
                    display: flex;
                    background: yellow;   
                }
                .project-contributers {
                    flex: 1 1 0;
                    display: flex;
                    background: yellow;   
                }
                .project-commits {
                    flex: 1 1 0;
                    display: flex;
                    justify-content: center;
                    background: yellow;   
                }
                `}
            </style>
        </div>
    )
}
export default Project