import React from "react"


import messageBoxImage from "./../images/message-box.png"

class MessageTextField extends React.Component {

	render() {
		return (
			<div>
				<div className="messageBoxText">
					<h1>Your Messages</h1>
				</div>
				<div className="messageBoxImageContainer">
					<img src={messageBoxImage}/>
				</div>
			</div>
		)
	}


}

export default MessageTextField