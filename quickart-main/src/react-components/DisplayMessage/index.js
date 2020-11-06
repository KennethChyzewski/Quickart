import React from "react"
import "./styles.css"

import sendImage from "./../../images/enter-image.png"

class DisplayMessage extends React.Component {


	render() {
		return (
			<div className="messageBox">
				<div className="messageHeader">
					<div className="textHistoryIconContainer">
						<img alt="profile pic" className="textHistoryProfileIcon" src={this.props.profilePic} />
					</div>
					<div className="textHistoryUsernameContainer">
						<h1>{this.props.userName}</h1>
					</div>
				</div>
				<div className="chatHistoryContainer">
					<div className="chatHistoryBox">
						<h1>this.props.sentMessage</h1>
					</div>
				</div>
				
				<div>
					<input type="text" name="title" className="textInputArea" onChange={this.handleChange.bind(this)}/>
				</div>
				<div className="buttonArea">
					<div className="sendButton"> <img alt="profile pic" src={sendImage} className="sendMessageImage" onClick={this.sendMessage}/> </div>	
				</div>
			</div>
		)
	}

}

export default DisplayMessage