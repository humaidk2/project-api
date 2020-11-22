import React from "react"
const Project = () => {
    return (
        <div className="project">
            <div className="project-title">Storit</div>
            <div className="project-description">
                {" "}
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
                ea magnam eveniet, doloremque non minus tempora, impedit
                inventore facere fuga ut cupiditate itaque vitae recusandae
                quaerat. Assumenda impedit velit at.
            </div>
            <div className="project-contributers">
                cool, done, john, tom, bret, fifty, fasfa,asf
            </div>
            <div className="project-commits">400</div>
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
