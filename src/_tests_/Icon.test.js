/* eslint-disable no-undef */
/**
 * @jest-environment jsdom
 */

import { render, screen } from "@testing-library/react"
import React from "react"
import Icon from "../components/icon"
  
describe("Testing Page IntroPage", ()=> { 
  
	it("Render Icon", () => { 
		render(<Icon />) 
		const testElement = screen.getByTestId("Icon-test")
		expect(testElement).toBeInTheDocument()
	})
  
})