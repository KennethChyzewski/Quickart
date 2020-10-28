import React from 'react';
import { Link } from "react-router-dom";

import "./styles.css";

class  WelcomePage extends React.Component {

    render(){
        return (
        <section className="welcomePage">
            <div className="transparentFilter">
                <div className="welcomePageTextBlock">
                    <h2 className="largeText">Welcome to Quickart!</h2>
                    <p className="mediumText">Create a user profile or login to start creating and browsing posts that sell local farm items!</p>
                    <div className="LoginButtons addSmallMargin">
                        <Link className="btn btnDefault" to="/register">Sign Up</Link>
                        <Link className="btn btn" to="/login">Login</Link>
                    </div>
                </div>
            </div>
        </section>
        );
    }
}
    
export default WelcomePage;