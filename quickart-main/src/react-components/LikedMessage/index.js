import React from "react"
import "./styles.css"

import reactionImage from "../../images/reaction-img.png"

class LikedMessage extends React.Component {

	constructor(props) {
		super(props)

	}

	render() {
		return (
		<>{this.props.likedFlag ? 
			this.props.location ?
				<div className="messageReactionContainerRight">
					<img className="messageReactionImageRight" src={reactionImage} />
				</div> 
				:
				<div className="messageReactionContainerLeft">
					<img className="messageReactionImageLeft" src={reactionImage} />
				</div> 
			:
			<div>
			</div>
		}</>

		)
	}




}

export default LikedMessage