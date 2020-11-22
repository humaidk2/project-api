const express = require("express")
const helmet = require("helmet")
const projectsUserRoute = require("./routes/projects/getUser")
const projectsProjectRoute = require("./routes/projects/getProject")

const app = express()

const PORT = process.env.PORT || 8080

app.use(helmet())

app.use("/projects/:username", projectsUserRoute)
app.use("/projects/:username/:project_id", projectsProjectRoute)
app.use("/*", (req, res) => {
    res.status(404).send({})
})

module.exports = app.listen(PORT, () => {
    console.log("listening on port", PORT)
})
