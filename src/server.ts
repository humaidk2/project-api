const express = require("express")

const app = express()

const PORT = process.env.PORT || 3000

const users = [
    {
        username: "humaidk2",
        name: "humaid",
        id: 5,
        projects: [
            {
                id: 5,
                url: `${process.env.HOST}/projects/humaidk2/${5}`,
                title: "Money-io",
            },
            {
                id: 6,
                url: `${process.env.HOST}/projects/humaidk2/${6}`,
                title: "Storit",
            },
        ],
    },
]

app.get("/projects/:username", (req, res) => {
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
    const foundUser = users.find(
        (user) => user.username === req.params.username
    )
    res.setHeader("Content-Type", "application/json")
    res.send(JSON.stringify(foundUser, null, 4))
})

app.listen(3000, () => {
    console.log("listening on port", PORT)
})
