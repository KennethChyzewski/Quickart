import React from "react"
import './styles.css';

import sasukeProfilePic from "./../../images/sasuke.jpg";
import alexProfilePic from "./../../images/alex.jpg";
import ginaProfilePic from "./../../images/gina.jpg";
import samProfilePic from "./../../images/sam.jpg";

import MessageView from "./../MessageView"


import {Route, BrowserRouter as Router, Switch} from "react-router-dom"

class MessagesPage extends React.Component {

  constructor() {
    super()
    this.state = {
      users: [
        ["Sasuke", "/messages/Sasuke", sasukeProfilePic], 
        ["Alex", "/messages/Alex", alexProfilePic], 
        ["ginaaa22", "/messages/ginaaa22", ginaProfilePic], 
        ["sam_x", "/messages/sam_x", samProfilePic],
      ]
    }
  }


  render() {
    const allUsers = this.state.users.map(item => item)
    console.log("allUsers: ", allUsers[0])
    const users = this.state.users.map((item,index) => <Route exact path={item[1]} render={() => (<MessageView key={index} flag={true} allUsers={allUsers} userName={item[0]} profilePic={item[2]} messagePath={item[1]}/>)}/>)
    return (
      <div>
        <Router>
          <Switch>
            <Route exact path='/messages' render={() => (<MessageView flag={false} allUsers={this.state.users}/>)}/>
            {users}
          </Switch>
        </Router>
      </div>
    )
  }
}

export default MessagesPage;
