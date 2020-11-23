export {}
const chai = require("chai")

const chaiHttp = require("chai-http")
const server = require("../../server")
let expect = chai.should()

chai.use(chaiHttp)

const testUser = {
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
}
describe("Project", () => {
    describe("/GET projects username", () => {
        it("it should GET valid user", (done) => {
            chai.request(server)
                .get("/projects/humaidk2")
                .end((err, res) => {
                    res.should.have.status(200)
                    done()
                })
        })
        it("it should not GET invalid users", (done) => {
            chai.request(server)
                .get("/projects/humaidk")
                .end((err, res) => {
                    res.should.have.status(404)
                    done()
                })
        })
        it("it should have property id", (done) => {
            chai.request(server)
                .get("/projects/humaidk2")
                .end((err, res) => {
                    res.body.should.have.property("id")
                    res.body.id.should.be.a("number")
                    done()
                })
        })
        it("it should have property username", (done) => {
            chai.request(server)
                .get("/projects/humaidk2")
                .end((err, res) => {
                    res.body.should.have.property("username")
                    res.body.username.should.be.a("string")
                    done()
                })
        })
        it("it should have property name", (done) => {
            chai.request(server)
                .get("/projects/humaidk2")
                .end((err, res) => {
                    res.body.should.have.property("name")
                    res.body.name.should.be.a("string")
                    done()
                })
        })
        it("it should have property projects", (done) => {
            chai.request(server)
                .get("/projects/humaidk2")
                .end((err, res) => {
                    res.body.should.have.property("projects")
                    res.body.projects.should.be.an("array")
                    done()
                })
        })
        it("it should have id, url, title in projects", (done) => {
            chai.request(server)
                .get("/projects/humaidk2")
                .end((err, res) => {
                    if (res.body.projects.length > 1) {
                        res.body.projects[0].should.have.property("id")
                        res.body.projects[0].id.should.be.a("number")
                        res.body.projects[0].should.have.property("url")
                        res.body.projects[0].url.should.be.a("string")
                        res.body.projects[0].should.have.property("title")
                        res.body.projects[0].title.should.be.a("string")
                    }
                    done()
                })
        })
        it("it should match test user", (done) => {
            chai.request(server)
                .get("/projects/humaidk2")
                .end((err, res) => {
                    res.body.should.be.deep.equal(testUser)
                    done()
                })
        })
    })
})
