import React from "react"
import sasukeProfilePic from "./../images/sasuke.jpg";
import alexProfilePic from "./../images/alex.jpg";
import ginaProfilePic from "./../images/gina.jpg";
import samProfilePic from "./../images/sam.jpg";

import {Route, BrowserRouter as Router, Switch, Link} from "react-router-dom"

class ActiveMessagesBar extends React.Component {

	render() {
		return (
			<div className="activeMessagesBox">
    			<div className="messageIconContainer">
					<img className="messageProfileIcon" src={this.props.profilePic} />
				</div>
				<div className="messageUsernameContainer">
					<Link to={this.props.userName}>{this.props.userName}</Link>
				</div>
			</div>
		)
	}
}

export default ActiveMessagesBar;