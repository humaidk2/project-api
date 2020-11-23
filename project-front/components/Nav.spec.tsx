import * as React from "react"
import { shallow } from "enzyme"
import Nav from "./Nav"

describe("Nav component", () => {
    describe("Nav", () => {
        it("should render without throwing an error", function () {
            const wrap = shallow(<Nav username="test" />)
            expect(wrap).toMatchSnapshot()
        })
    })
})
