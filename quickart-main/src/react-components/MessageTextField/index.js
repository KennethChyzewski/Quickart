import React from "react"
import "./styles.css"

import messageBoxImage from "./../../images/message-box.png"

class MessageTextField extends React.Component {

	render() {
		return (
			<div className="conversationBox">
				<div className="messageBoxText">
					<h1>Your Messages</h1>
				</div>
				<div className="messageBoxImageContainer">
					<img alt="profile pic" src={messageBoxImage}/>
				</div>
			</div>
		)
	}


}

export default MessageTextField