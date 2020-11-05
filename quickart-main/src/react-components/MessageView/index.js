import React from "react"
import "./styles.css"

import MessageTextField from "./../MessageTextField"
import ActiveMessagesBar from "./../ActiveMessagesBar"
import TextingHistory from "./../TextingHistory"

class MessageView extends React.Component {

	constructor(props) {
		super(props)
		this.state = {
			allUsers: this.props.allUsers
		}
	}

	render() {
		const allUsers = this.state.allUsers.map((item,index) => <ActiveMessagesBar key={index} profilePic={item[2]} userName={item[0]} messagePath={item[1]}/>)
		return (
			<div>
				<div className="messagingUsersSidebar">
					{allUsers}
				</div>
				<div>
        			{this.props.flag ? <TextingHistory userName={this.props.userName} profilePic={this.props.profilePic}/> : <MessageTextField/>}
      			</div>
			</div>
		)
	}


}

export default MessageView