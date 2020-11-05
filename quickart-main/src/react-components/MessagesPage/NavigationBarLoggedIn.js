import React from 'react'

class NavigationBarLoggedIn extends React.Component {

    render(){
        return (
        <nav className="navbar backgroundBlue">
            <h1>
                <a href="index.html">
                    <i className="fas fa-shopping-cart"></i> Quickart
                </a>
            </h1>
            <ul>
                <li><a href="messagesPage">Messages</a></li>
                <li><a href="homePage">Home</a></li>
                <li><a href="profilePage">Profile</a></li>
            </ul>
        </nav>
        );
    }

}
   

export default NavigationBarLoggedIn