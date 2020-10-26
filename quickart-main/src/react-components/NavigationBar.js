import React from 'react'

class NavigationBar extends React.Component {

    render(){
        return (
        <nav className="navbar backgroundBlue">
            <h1>
                <a href="index.html">
                    <i className="fas fa-shopping-cart"></i> Quickart
                </a>
            </h1>
            <ul>
                <li><a href="aboutPage">About</a></li>
                <li><a href="registerPage">Sign Up</a></li>
                <li><a href="loginPage">Login</a></li>
            </ul>
        </nav>
        );
    }

}
   

export default NavigationBar