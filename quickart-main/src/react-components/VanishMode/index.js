import React from "react"
import "./style.css"

class VanishMode extends React.Component {

	render() {
		return (
			<div>
				<h1 className="text">You are now in Vanish Mode. Any messages you send and recieve here will not be saved.</h1>
				{this.props.vanishModeHistory}
			</div>
		)
	}



}

export default VanishMode