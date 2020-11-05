import React from "react"
import "./styles.css"

import {Link} from "react-router-dom"

class ActiveMessagesBar extends React.Component {

	render() {
		return (
			<div className="activeMessagesBox">
    			<div className="messageIconContainer">
					<img alt="profile picture" className="messageProfileIcon" src={this.props.profilePic} />
				</div>
				<div className="messageUsernameContainer">
					<Link to={this.props.messagePath}>{this.props.userName}</Link> 
				</div>
			</div>
		)
	}
}

export default ActiveMessagesBar;