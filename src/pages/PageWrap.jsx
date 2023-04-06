import React from "react"
import "../styles/PageWrap.css"
import backgroundIMG from "../assets/wallpaperlain.gif"
import ScreenDisplay from "../components/ScreenDisplay"
import NavBar from "../components/NavBar"

export default function PageWrap() {
	return (
		<div data-testid="pagewrap-test" className="page-wrap" style={{ backgroundImage: `url(${backgroundIMG})`}}>
			<ScreenDisplay />
			<NavBar />
		</div>

	)
}
