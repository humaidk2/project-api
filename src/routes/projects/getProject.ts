export {}
const express = require("express")
const router = express.Router({ mergeParams: true })
const request = require("request")
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
router.get("/", async (req, res) => {
    /*
    {
        id: project_id,
        title: project_title,
        description: readme_description
        contributers :[]
        numOfCommits: 4
    }
    */
    // let project = {
    //     id: String,
    //     title: String,
    //     description: String,
    //     contributers: Array,
    //     numOfCommits: Number,
    // }
    let projectList: any = await getRequest(
        `https://api.github.com/users/${req.params.username}/repos`
    )
    let projectMeta = await projectList.find(
        (project) => project.id === Number(req.params.project_id)
    )
    if (await !projectMeta) {
        res.status(404).send({})
    } else {
        let commitResponseHeaders: any = await getResponseHeaders(
            projectMeta.url + "/commits?per_page=1"
        )
        let link = await commitResponseHeaders.link
        let commits = 0
        if (link) {
            link = await link.split(", ")
            link = await link[link.length - 1]
            commits = await Number(
                link.slice(
                    link.indexOf("&page=") + "&page=".length,
                    link.indexOf(">")
                )
            )
        }

        let numOfCommits = (await commits) || 0
        let contributers: any = await getRequest(
            projectMeta.url + "/contributors"
        )
        contributers = (await contributers.map((user) => user.login)) || []
        let description: any = await getRawData(
            `https://raw.githubusercontent.com/${projectMeta.full_name}/${projectMeta.default_branch}/README.md`
        )
        description =
            (await description.split(" ").slice(0, 50).join(" ")) || ""
        var result = await {
            id: projectMeta.id,
            title: projectMeta.name,
            description,
            contributers,
            numOfCommits,
        }
        await res.setHeader("Content-Type", "application/json")
        await res.status(200).send(JSON.stringify(result, null, 4))
    }
})
async function getRequest(url) {
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
    return await new Promise((resolve, reject) =>
        request(options, (error, response, body) => {
            let data: any = JSON.parse(body)
            resolve(data)
        })
    )
}
async function getResponseHeaders(url) {
    const options = {
        headers: {
            "User-Agent": "request",
        },
        url,
        // auth: {
        //     username: "humaidk2",
        //     password: "",
        // },
    }
    return await new Promise((resolve, reject) =>
        request(options, (error, response, body) => {
            resolve(response.headers)
        })
    )
}
async function getRawData(url) {
    const options = {
        url,
        headers: {
            "User-Agent": "request",
        },
    }
    return await new Promise((resolve, reject) =>
        request(options, (error, response, body) => {
            resolve(body)
        })
    )
}

module.exports = router
