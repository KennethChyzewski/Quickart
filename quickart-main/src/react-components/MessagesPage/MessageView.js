import React from "react"

import sasukeProfilePic from "./../images/sasuke.jpg";
import alexProfilePic from "./../images/alex.jpg";
import ginaProfilePic from "./../images/gina.jpg";
import samProfilePic from "./../images/sam.jpg";

import MessageTextField from "./MessageTextField"
import ActiveMessagesBar from "./ActiveMessagesBar"
import TextingHistory from "./TextingHistory"

class MessageView extends React.Component {
	render() {
		return (
			<div>
				<div className="messagingUsersSidebar">
					<ActiveMessagesBar profilePic={sasukeProfilePic} userName={"Sasuke"}/>
					<ActiveMessagesBar profilePic={alexProfilePic} userName={"Alex"}/>
					<ActiveMessagesBar profilePic={ginaProfilePic} userName={"ginaaa22"}/>
					<ActiveMessagesBar profilePic={samProfilePic} userName={"sam_x"}/>
				</div>
				<div>
        			{this.props.flag ? <TextingHistory userName={this.props.userName} profilePic={this.props.profilePic}/> : <div className="messageBox"><MessageTextField/></div>}
      			</div>
			</div>
		)
	}


}

export default MessageView