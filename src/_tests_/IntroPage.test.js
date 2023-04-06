/* eslint-disable no-undef */
/**
 * @jest-environment jsdom
 */

import { render, screen } from "@testing-library/react"
import React from "react"
import IntroPage from "../pages/introPage"
 
describe("Testing Page IntroPage", ()=> { 
 
	it("Render Introduction Animation", () => { 
		render(<IntroPage/>) 
		const testElement = screen.getByTestId("intro-test")
		expect(testElement).toBeInTheDocument()
	})
 
})