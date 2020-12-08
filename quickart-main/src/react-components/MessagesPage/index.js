import React from "react"
import './styles.css';

import sasukeProfilePic from "./../../images/sasuke.jpg";
import alexProfilePic from "./../../images/alex.jpg";
import ginaProfilePic from "./../../images/gina.jpg";
import samProfilePic from "./../../images/sam.jpg";
import leeMinhyukPic from "./../../images/Lee-Minhyuk.jpg";

import { connect } from 'react-redux';
import { getMessages, sendMessage } from '../../actions/messagesActions';
import { getAllUsers } from '../../actions/usersActions';
import store from '../../store';

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

  componentWillMount() {
    // let reduxState = store.getState()
    // //let cthis.state = reduxState['loginState']
    // let userID = reduxState['loginState']['id']
    // //console.log(this.state)
    // await this.props.getProfile(userID)
    // //settingsState should be stored here
    // reduxState = store.getState()
    // this.state = reduxState['settingsState']
    // let userType = reduxState['loginState']['user'];
    // this.isAdmin = userType === "admin" 
    this.a()
  }

  async a() {
    await this.props.getAllUsers(localStorage.token)
    let reduxState = store.getState()
    this.state.users = reduxState['usersState']
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

// export default MessagesPage;
export default connect(null, { getAllUsers, getMessages, sendMessage })(MessagesPage);