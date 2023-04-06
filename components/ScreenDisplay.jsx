import React, { useState } from "react"
import "../styles/ScreenDisplay.css"
import Icon from "./icon"
import pcIcon from "../assets/pcIcon.png"
import marioIcon from "../assets/marioIcon.png"
import cdIcon from "../assets/cdIcon.gif"
import githubIcon from "../assets/githubicon.png"
import smtIcon from "../assets/smtIcon.png"
import folderIcon from "../assets/folderIcon.png"
import calcIcon from "../assets/calcIcon.png"
import pokeIcon from "../assets/pokeCard.gif"
import Window from "./Window"

export default function ScreenDisplay() {

	const [activeWindows, setActiveWindows] = useState([])


	const handleWindow = (name, windowName) => {
		// eslint-disable-next-line react/jsx-key
		setActiveWindows(activeWindows => [...activeWindows, <Window name={name} windowName={windowName}/>])
	}

	return (
		<div className="Display-container">
			<div className="iconrow">
				<div className="clickableDiv" onClick={() => handleWindow("pcIcon", "Andres (C:)")}><Icon iconIMG={ pcIcon } title="Andres (C:)"/></div>
				<a href="https://github.com/andresdlRoca" target="_blank" rel="noreferrer"><Icon iconIMG={ githubIcon } title="Github"/></a>
				<div className="clickableDiv" onClick={() => handleWindow("Projects", "Projects")}><Icon iconIMG={ folderIcon } title="Projects"/></div>
				<div className="clickableDiv" onClick={() => handleWindow("Lofi", "Lofi Beats")}><Icon iconIMG={ cdIcon } title="Lofi Beats to study"/></div>
				<div className="clickableDiv" onClick={() => handleWindow("smt", "Shin Megami Tensei I")}><Icon iconIMG={ smtIcon } title="Shin Megami Tensei I"/></div>
				<div className="clickableDiv" onClick={() => handleWindow("mario", "Mario Bros")}><Icon iconIMG={ marioIcon } title="Super Mario Bros"/></div>
				<a href="http://stw-uvg-22.site:4025" target="_blank" rel="noreferrer"><Icon iconIMG={ calcIcon } title="Calculator" /></a>
				<a href="http://stw-uvg-22.site:3521" target="_blank" rel="noreferrer"><Icon iconIMG={ pokeIcon } title="PokeCards" /></a>

			</div>
			{activeWindows?.map((item, i) => (
				<div key={i}>{item}</div>
			))}
 
		</div>

	)
}
// <Window name="Lofi" windowName="Lofi Beats to Study"/>