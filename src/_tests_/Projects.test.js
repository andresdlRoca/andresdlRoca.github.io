/* eslint-disable no-undef */
/**
 * @jest-environment jsdom
 */

import { render, screen } from "@testing-library/react"
import React from "react"
import Projects from "../components/Projects"
 
describe("Testing component Project links", () => {
 
 
	it("Testing links", () => {
		render(<Projects/>)
		const testElement = screen.getByTestId("GithubP1-test")
		expect(testElement).toHaveAttribute("href", "https://github.com/andresdlRoca/Proyecto1-STW-UVG")
	})

})