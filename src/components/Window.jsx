import React, { useState } from "react"
import "../styles/Window.css"
import Spotify from "react-spotify-embed"
import YouTube from "react-youtube"
import Draggable from "react-draggable"
import Projects from "./Projects"
import Aboutme from "./Aboutme"
import PropTypes from "prop-types"


export default function Window({ name, windowName }) {
    
	Window.propTypes = {
		name: PropTypes.string.isRequired,
		windowName: PropTypes.string.isRequired,
	}


	const [closingWindowState, setClosingWindowState] = useState(name)

	const handleClose = () => {
		setClosingWindowState("")
	}

	return (
		<Draggable>
			<div className="windowContainer handle" style={{display: closingWindowState === name ? "block" : "none" }}>
				{windowName}
				<button onClick={handleClose}>Close</button>
				<div className={name === "pcIcon" ? "windowContent about visible" : "nonvisible"}>
					<Aboutme/>                 
				</div>
				<div className={name === "Projects" ? "windowContent projects visible" : "nonvisible"}>
					<Projects/>
				</div>
				<div className={name === "Lofi" ? "windowContent lofi visible" : "nonvisible"}>
					<Spotify link={"https://open.spotify.com/playlist/60fjgeg72OSnHnVa4im6oq?si=78aea5b1b12248bb"}/>
				</div>
				<div className={name === "smt" ? "windowContent smt visible" : "nonvisible"}>
					<YouTube videoId="-Y9ozjlhrj8"/>
				</div>
				<div className={name === "mario" ? "windowContent mario visible" : "nonvisible"}>
					<YouTube videoId="JHlUEJXaxfY"/>
				</div>
			</div>
		</Draggable>
    

	)
}