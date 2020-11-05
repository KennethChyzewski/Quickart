import React from "react"
import "./styles.css"


class Message extends React.Component {

	constructor() {
		super()
		this.state = {
			liked: false
		}
	}

	doubleClicked(event) {	
		this.setState({
			liked: true
		})
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
						</div> :
						<div className="textMessageBoxLeft" onDoubleClick={this.doubleClicked.bind(this)}>
							<img className="actualMessageLeft" src={this.props.messageText}/>
							<h1 className="timestampLeft">{this.props.date}</h1>
						</div>
						:
						this.props.location ?
							<div className="textMessageBoxRight" onDoubleClick={this.doubleClicked.bind(this)}>
								<h1 className="actualMessageRight">{this.props.messageText}</h1>
								<h1 className="timestampRight">{this.props.date}</h1>
							</div> : 
							<div className="textMessageBoxLeft">
								<h1 className="actualMessageLeft">{this.props.messageText}</h1>
								<h1 className="timestampLeft">{this.props.date}</h1>
							</div> 
				}
			</div>
		)
	}
}

export default Message
