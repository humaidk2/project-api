export {}
const chai = require("chai")

const chaiHttp = require("chai-http")
const server = require("./server")
let should = chai.should()

chai.use(chaiHttp)

describe("Project", () => {
    describe("/GET projects", () => {
        it("it should GET project details", (done) => {
            chai.request(server)
                .get("/projects/humaidk2")
                .end((err, res) => {
                    res.should.have.status(200)
                    done()
                })
        })
    })
})
