import React from 'react'

class  WelcomePage extends React.Component {

    render(){
        return (
        <section className="welcomePage">
            <div className="transparentFilter">
                <div className="welcomePageTextBlock">
                    <h2 className="largeText">Welcome to Quickart!</h2>
                    <p className="mediumText">Create a user profile or login to start creating and browsing posts that sell local farm items!</p>
                    <div className="LoginButtons addSmallMargin">
                        <a href="registerPage" className="btn btnDefault">Sign Up</a>
                        <a href="loginPage" className="btn btn">Login</a>
                    </div>
                </div>
            </div>
        </section>
        );
    }
}
    

export default WelcomePage