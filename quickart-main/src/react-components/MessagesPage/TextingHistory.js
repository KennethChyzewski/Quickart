import React from "react"
import "./../App.css"
import {Link} from "react-router-dom"

import enterImage from "./../images/enter-image.png"
import vanishModeImage from "./../images/vanish-mode-image.png"

import MessageTextField from "./MessageTextField"
import DisplayMessage from "./DisplayMessage"

class TextingHistory extends React.Component {

	constructor() {
		super()
		this.state = {
			message: false,
			sentMessage: null
		}
	}

	sendMessage() {
   		console.log("hehexd")
	}

	handleChange(event) {
		if(event.key === 'Enter') {
        	this.setState(state =>({
				message: true,
				sentMessage: event.target.value
				})
			)
			console.log(this.state.message)
			console.log(this.state.sentMessage)
    	}
	}


	render() {
		return (
			<div className="messageBox">
				<div className="messageHeader">
					<div className="textHistoryIconContainer">
						<img className="textHistoryProfileIcon" src={this.props.profilePic} />
					</div>
					<div className="textHistoryUsernameContainer">
						<h1>{this.props.userName}</h1>
					</div>
				</div>
				<div className="chatHistoryContainer">
					<div className="chatHistoryBox">
						{this.state.message ? <h1>{this.state.sentMessage}</h1> :  <h1> This is the beginning of your legendary conversation with {this.props.userName} </h1>}
						{this.state.message = null}
					</div>
				</div>
				<div>
					<input placeholder="Message..." type="text" className="textInputArea" onKeyDown={this.handleChange.bind(this)}/>
				</div>
				<div className="buttonArea">
					<div className="sendButton"> <img src={enterImage} className="sendMessageImage" onClick={this.sendMessage}/> </div>	
				</div>
			</div>
		)
	}




}

export default TextingHistory