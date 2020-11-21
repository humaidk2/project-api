export {}
const chai = require("chai")

const chaiHttp = require("chai-http")
const server = require("../../server")
let expect = chai.should()

chai.use(chaiHttp)

const testProject = {
    id: 5,
    title: "Money-io",
    description: "E-wallet application",
    contributers: ["humaidk2"],
    numOfCommits: 300,
}
describe("Project", () => {
    describe("/GET projects username project_id", () => {
        it("it should GET valid project details", (done) => {
            chai.request(server)
                .get("/projects/humaidk2/5")
                .end((err, res) => {
                    res.should.have.status(200)
                    done()
                })
        })
        it("it should match test project", (done) => {
            chai.request(server)
                .get("/projects/humaidk2/5")
                .end((err, res) => {
                    res.body.should.be.deep.equal(testProject)
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
    })
})
