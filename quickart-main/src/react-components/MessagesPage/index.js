import React from "react"
import './styles.css';

import sasukeProfilePic from "./../../images/sasuke.jpg";
import alexProfilePic from "./../../images/alex.jpg";
import ginaProfilePic from "./../../images/gina.jpg";
import samProfilePic from "./../../images/sam.jpg";
import leeMinhyukPic from "./../../images/Lee-Minhyuk.jpg";

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
        ["Lee Minhyuk", "/messages/Lee", leeMinhyukPic]
      ]
    }
  }


  render() {
    const users = this.state.users.map((item,index) => <Route exact path={item[1]} key={index} render={() => (<MessageView key={index} flag={true} allUsers={this.state.users} userName={item[0]} profilePic={item[2]} messagePath={item[1]}/>)}/>)
    return (
      <section className="backgroundImage">
        <div>
          <Router>
            <Switch>
              <Route exact path='/messages' render={() => (<MessageView flag={false} allUsers={this.state.users}/>)}/>
              {users}
            </Switch>
          </Router>
        </div>
      </section>
    )
  }
}

export default MessagesPage;
