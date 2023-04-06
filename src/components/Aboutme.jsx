import React from "react"
import "../styles/Aboutme.css"
import meimg from "../assets/me.png"

export default function Aboutme() {

	return (
		<div className="aboutme-container">
            About me
			<br/>
			<img src={meimg} alt="Me" className="meimg" />
			<br/>
            Andrés de la Roca
			<br/>
            Comp-Sci Student at Universidad del Valle de Guatemala
			<p className="Desc">
            I´m a computer science student with
            experience in the creation
            of web applications and desktop
            applications in programming
            languages like Python, Java, C and
            C++.
			</p>
			<p className="Desc">
            I´m always looking for opportunities to grow academically and occupationally
            and I always strive to expand my resources and knowledge as a developer every day.
			</p>  
			<h3>Contact Info</h3>
			<p className="contactinfo">andresdelaroca11@gmail.com</p>
			<p className="contactinfo">+502 1234 5678</p> 
			<a href="https://github.com/andresdlRoca" target="_blank" rel="noreferrer">Github</a>            
		</div>

	)

}