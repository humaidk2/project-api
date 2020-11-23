export {}
const express = require("express")

const router = express.Router({ mergeParams: true })

const users = [
    {
        id: 5,
        username: "humaidk2",
        name: "humaid",
        projects: [
            {
                id: 5,
                url: `projects/humaidk2/${5}`,
                title: "Money-io",
            },
            {
                id: 6,
                url: `projects/humaidk2/${6}`,
                title: "Storit",
            },
        ],
    },
]
/*
    {
        username: username,
        name: name,
        id: id,
        projects: [{
            id: project_id,
            url: project_url,
            title: project_title
        }]
    }
    */
router.get("/", (req, res) => {
    let foundUser = users.find((user) => user.username === req.params.username)
    res.setHeader("Content-Type", "application/json")
    if (foundUser) {
        res.status(200).send(JSON.stringify(foundUser, null, 4))
    } else {
        res.status(404).send({})
    }
})

module.exports = router
