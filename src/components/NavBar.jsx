import React, { useState, useEffect, useRef } from "react"
import "../styles/NavBar.css"
import palicoBtn from "../assets/palicoicon.png"
import meow from "../assets/meow.wav"

export default function NavBar() {
    
	const [date, setDate] = useState(new Date())
	const [audio, setAudio] = useState("")
	const audioRef = useRef()
  
	const handleSound = (src) => {
		setAudio(src)
		if (audioRef.current) {
			audioRef.current.pause()
			audioRef.current.load()
			audioRef.current.play()
		}
	}

	useEffect(() => {
		let timer = setInterval( () => tick(), 1000)
		return function cleanup() {
			clearInterval(timer)
		}
	})

	function tick() {
		setDate(new Date())
	}

	return (
		<div className="navbar-container">
			<audio className="audiosource" ref={audioRef}>
				<source type="audio/mp3" src={audio} />
			</audio>
			<div onClick={() => handleSound(meow)} className="homebutton">
				<img src={palicoBtn} alt="Palico home button" />
			</div>
			<div className="iconPlace"></div>
			<div className="hourDisplay">
				<p>{date.toLocaleTimeString()}</p>
			</div>
		</div>

	)
}