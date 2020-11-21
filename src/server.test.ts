export {}
const chai = require("chai")

const chaiHttp = require("chai-http")
const server = require("./server")
let should = chai.should()

chai.use(chaiHttp)

describe("Server", () => {
    describe("/GET invalid url", () => {
        it("it should GET no valid response", (done) => {
            chai.request(server)
                .get("/test")
                .end((err, res) => {
                    res.should.have.status(404)
                    res.body.should.be.deep.equal({})
                    done()
                })
        })
    })
})
