import * as React from "react"
import { shallow } from "enzyme"
import Profile from "./Profile"

describe("Nav component", () => {
    describe("Nav", () => {
        it("should render without throwing an error", function () {
            const wrap = shallow(
                <Profile username="testUser" name="testName" />
            )
            expect(wrap).toMatchSnapshot()
        })
    })
})
