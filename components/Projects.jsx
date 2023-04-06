/* eslint-disable react/no-unescaped-entities */
import React from "react"
import "../styles/ScreenDisplay.css"
import ysbrydimg from "../assets/ysbrydss.png"
import uvgenteimg from "../assets/uvgentess.png"
import hciimg from "../assets/hciss.png"
import "../styles/Projects.css"

export default function Projects() {

	return (
		<div className="projects-container">
            Projects
			<p>These are some of the projects I have worked on throughout my career and want to showcase inside this portfolio</p>
			<div className="ysbrydgamespage">
                Ysbryd Games Page Clone
				<p>This page was created taken direct inspiration on the page from videogame publisher <a target="_blank" href="https://www.ysbryd.net" rel="noreferrer">Ysbryd Games</a> in
                an attempt to recreate the page 1:1.
                Developed in React.</p>
				<img src={ysbrydimg} alt="ScreenShot from project page" />
				<a data-testid="GithubP1-test" target="_blank" href="https://github.com/andresdlRoca/Proyecto1-STW-UVG" rel="noreferrer">Github Repo</a>
				<br/>
				<a target="_blank" href="http://stw-uvg-22.site:4010" rel="noreferrer">Working page</a>
			</div>
			<div className="uvgentepage">
				<br/>
                UVGente Page (WIP)
				<p>
                A project in development that wants to develop a Ebay-esque marketplace inside the environment of Universidad del Valle
                de Guatemala in which students and university collaborators can buy and sell products related to academic activities.
                Developed in React.
				</p>
				<img src={uvgenteimg} alt="ScreenShot from project page" />
				<a target="_blank" href="https://github.com/andresdlRoca/prototipos_ingenieria_software-UVG" rel="noreferrer">Github Repo</a>
			</div>
			<div className="metaverseproject">
				<br/>
                Metaverse VR Project (Prototype)
				<p>
                A prototype created as an idea for a project that will help students improve in their learning through activities and
                experiences inside a "metaverse" created in VR. This project was developed in the Unity Game Engine.
				</p>
				<img src={hciimg} alt="ScreenShot from project" />
				<a target="_blank" href="https://www.youtube.com/watch?v=oalR09XIHv4" rel="noreferrer">Demo Video</a>
				<br/>
				<a target="_blank" href="https://github.com/andresdlRoca/HCI_Metaverse" rel="noreferrer">Github Repo</a>
				<br/>
			</div>
		</div>

	)
}