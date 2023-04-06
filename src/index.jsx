import React from "react"
import "./styles/index.css"
import ReactDOM from "react-dom"
import PageWrap from "./pages/PageWrap"
import IntroPage from "./pages/IntroPage"

ReactDOM.render(
	<>
		<IntroPage />
		<PageWrap />
	</>
    
	, document.getElementById("app"))