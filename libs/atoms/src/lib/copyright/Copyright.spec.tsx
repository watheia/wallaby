import { render } from "@testing-library/react"

import Copyright from "./Copyright"

describe("Copyright", () => {
  it("should render successfully", () => {
    const { baseElement } = render(<Copyright />)
    expect(baseElement).toBeTruthy()
  })
})
