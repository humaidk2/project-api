export {}
const chai = require("chai")

const chaiHttp = require("chai-http")
const server = require("../../server")
let expect = chai.should()

chai.use(chaiHttp)

const testUser = {
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
}
describe("Project", () => {
    describe("/GET projects username", () => {
        it("it should GET valid status on found user", (done) => {
            chai.request(server)
                .get("/projects/humaidk2")
                .end((err, res) => {
                    res.should.have.status(200)
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
        it("it should have user id", (done) => {
            chai.request(server)
                .get("/projects/humaidk2")
                .end((err, res) => {
                    res.body.should.have.property("id")
                    done()
                })
        })
        it("it should not find an invalid user", (done) => {
            chai.request(server)
                .get("/projects/humaidk")
                .end((err, res) => {
                    res.should.have.status(404)
                    done()
                })
        })
    })
})
