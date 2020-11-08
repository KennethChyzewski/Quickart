import React from "react"
import "./styles.css"

import LikedMessage from "./../LikedMessage"


class Message extends React.Component {

	constructor() {
		super()
		this.state = {
			liked: false
		}
	}

	doubleClicked(event) {	
		if (this.state.liked) {
			this.setState({
				liked: false
			})
		}
		else {
			this.setState({
				liked: true
			})
		}
	}


	render() {
		return (
			<div>
				{/*this.props.location ? 
					<div className="textMessageBoxRight" onDoubleClick={this.doubleClicked.bind(this)}>
						<h1 className="actualMessageRight">{this.props.messageText}</h1>
						<h1 className="timestampRight">{this.props.date}</h1>
					</div> : 
					<div className="textMessageBoxLeft">
						<h1 className="actualMessageLeft">{this.props.messageText}</h1>
						<h1 className="timestampLeft">{this.props.date}</h1>
					</div> 
				*/}
				{this.props.isImage ? 
					this.props.location ? 
						<div className="textMessageBoxRight" onDoubleClick={this.doubleClicked.bind(this)}>
							<img className="actualMessageRight" src={this.props.messageText}/>
							<h1 className="timestampRight">{this.props.date}</h1>
							<LikedMessage likedFlag={this.state.liked} location={this.props.location}/>
						</div> :
						<div className="textMessageBoxLeft" onDoubleClick={this.doubleClicked.bind(this)}>
							<img className="actualMessageLeft" src={this.props.messageText}/>
							<h1 className="timestampLeft">{this.props.date}</h1>
							<LikedMessage likedFlag={this.state.liked} location={this.props.location}/>
						</div>
						:
						this.props.location ?
							<div className="textMessageBoxRight" onDoubleClick={this.doubleClicked.bind(this)}>
								<h1 className="actualMessageRight">{this.props.messageText}</h1>
								<h1 className="timestampRight">{this.props.date}</h1>
								<LikedMessage likedFlag={this.state.liked} location={this.props.location}/>
							</div> 
							: 
							<div className="textMessageBoxLeft" onDoubleClick={this.doubleClicked.bind(this)}>
								<h1 className="actualMessageLeft">{this.props.messageText}</h1>
								<h1 className="timestampLeft">{this.props.date}</h1>
								<LikedMessage likedFlag={this.state.liked} location={this.props.location}/>
							</div> 
				}
			</div>
		)
	}
}

export default Message
