export {}
const express = require("express")

const router = express.Router({ mergeParams: true })
const request = require("request")

var users = [
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
router.get("/", async (req, res) => {
    let user: any = await getRequest(
        res,
        `https://api.github.com/users/${req.params.username}`
    )
    user = await { id: user.id, username: user.login, name: user.name }

    let projects: any = await getRequest(
        res,
        `https://api.github.com/users/${req.params.username}/repos`
    )
    projects = await projects.map((project) => {
        return {
            id: project.id,
            url: `projects/${req.params.username}/${project.id}`,
            title: project.name,
        }
    })
    user = await { ...user, projects: projects.slice(0, 5) }
    await res.setHeader("Content-Type", "application/json")
    await res.status(200).send(JSON.stringify(user, null, 4))
})
async function getRequest(res, url) {
    const options = {
        headers: {
            "User-Agent": "request",
        },
        url,
        auth: {
            username: "humaidk2",
            password: "14f57e550749d647a2f80224f6beb2d4dc0b8a88",
        },
    }
    return await new Promise((resolve) =>
        request(options, (error, response, body) => {
            if (error) {
                console.log(error)
                res.status(404).send({ error })
            }
            let data = JSON.parse(body)
            resolve(data)
        })
    )
}

// function getUser()

module.exports = router
