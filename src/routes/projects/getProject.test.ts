export {}
const chai = require("chai")

const chaiHttp = require("chai-http")
const server = require("../../server")
let expect = chai.should()

chai.use(chaiHttp)

const testProject = {
    id: 5,
    title: "Money-io",
    description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore\
        ea magnam eveniet, doloremque non minus tempora, impedit\
        inventore facere fuga ut cupiditate itaque vitae recusandae\
        quaerat. Assumenda impedit velit.",
    contributers: ["humaidk2", "jon", "don"],
    numOfCommits: 300,
}
describe("Project", () => {
    describe("/GET projects username project_id", () => {
        // test status codes
        it("it should GET valid project details", (done) => {
            chai.request(server)
                .get("/projects/humaidk2/5")
                .end((err, res) => {
                    res.should.have.status(200)
                    done()
                })
        })
        it("it should not find invalid user", (done) => {
            chai.request(server)
                .get("/projects/humaidk/2")
                .end((err, res) => {
                    res.should.have.status(404)
                    done()
                })
        })
        // test prop id
        it("it should have property id", (done) => {
            chai.request(server)
                .get("/projects/humaidk2/5")
                .end((err, res) => {
                    res.body.should.have.property("id")
                    res.body.id.should.be.a("number")
                    done()
                })
        })
        // test prop title
        it("it should have property title", (done) => {
            chai.request(server)
                .get("/projects/humaidk2/5")
                .end((err, res) => {
                    res.body.should.have.property("title")
                    res.body.title.should.be.a("string")
                    done()
                })
        })
        // test prop description
        it("it should have property description", (done) => {
            chai.request(server)
                .get("/projects/humaidk2/5")
                .end((err, res) => {
                    res.body.should.have.property("description")
                    res.body.description.should.be.a("string")
                    done()
                })
        })
        it("it should not have more than 50 words in the description", (done) => {
            chai.request(server)
                .get("/projects/humaidk2/5")
                .end((err, res) => {
                    res.body.description
                        .split(" ")
                        .length.should.not.be.above(50)
                    done()
                })
        })
        // test prop contributers
        it("it should have property contributers", (done) => {
            chai.request(server)
                .get("/projects/humaidk2/5")
                .end((err, res) => {
                    res.body.should.have.property("contributers")
                    res.body.contributers.should.be.an("array")
                    res.body.contributers.length.should.be.above(1)
                    done()
                })
        })
        // test prop number of commits
        it("it should have property number of Commits", (done) => {
            chai.request(server)
                .get("/projects/humaidk2/5")
                .end((err, res) => {
                    res.body.should.have.property("numOfCommits")
                    res.body.numOfCommits.should.be.a("number")
                    done()
                })
        })
        // should match mock data
        it("it should match test project", (done) => {
            chai.request(server)
                .get("/projects/humaidk2/5")
                .end((err, res) => {
                    res.body.should.be.deep.equal(testProject)
                    done()
                })
        })
    })
})
