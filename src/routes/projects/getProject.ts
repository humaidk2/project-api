export {}
const express = require("express")
const router = express.Router({ mergeParams: true })

const projects = [
    {
        id: 5,
        title: "Money-io",
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore\
        ea magnam eveniet, doloremque non minus tempora, impedit\
        inventore facere fuga ut cupiditate itaque vitae recusandae\
        quaerat. Assumenda impedit velit.",
        contributers: ["humaidk2", "jon", "don"],
        numOfCommits: 300,
    },
    {
        id: 6,
        title: "Storit",
        description: "p2p cloud storage",
        contributers: ["humaidk2"],
        numOfCommits: 2000,
    },
]
router.get("/", (req, res) => {
    /*
    {
        id: project_id,
        title: project_title,
        description: readme_description
        contributers :[]
        numOfCommits: 4
    }
    */

    res.setHeader("Content-Type", "application/json")
    const foundProject = projects.find(
        (project) =>
            project.id === Number(req.params.project_id) &&
            project.contributers.indexOf(req.params.username) !== -1
    )
    res.setHeader("Content-Type", "application/json")
    if (foundProject) res.send(JSON.stringify(foundProject, null, 4))
    else res.status(404).send({})
})

module.exports = router
