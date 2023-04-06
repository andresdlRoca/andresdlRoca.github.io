import React from "react"
import "../styles/Icon.css"
import PropTypes from "prop-types"

export default function Icon({ iconIMG, title }) {

	Icon.propTypes = {
		iconIMG: PropTypes.string.isRequired,
		title: PropTypes.string.isRequired,
	}

	return (
		<div data-testid="Icon-test" className="iconContainer">
			<img src={iconIMG} alt={title} className="iconImage" />
			<p className="iconName">{title}</p>
		</div>
	)
}