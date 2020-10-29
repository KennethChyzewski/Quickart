import React from 'react'
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import { Link } from "react-router-dom";

import "./styles.css";

class DetailedPost extends React.Component {

    render(){
        return (
        <section class="containerPosts">
            {/*Title of Post + Bidding progress*/}
            <h1 class="postTitleColour"> Name of Post </h1>
            <div >
                <div class="backgroundDefault">
                    <h3> Last Day to Bid: XX-XX-XXXX</h3>
                </div>

                <form class="form">
                    <textarea class="inputGroup" placeholder="Bid Value in (CAD) "></textarea> 
                    <textarea class="inputGroup" placeholder="Your message here"></textarea> 
                    <br></br>
                    <input type="submit" value="Submit" class="btn btn" />
                </form>
            </div>

            {/* Information on product */}
            <div class="posts">
                <div class="infomationColour" >
                    <div>
                        <h4>Product Info/Description</h4>
                        <p class="paragraphColour">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </p>

                        <h4> PickUp/Delivery Options </h4>
                        <p class="paragraphColour">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </p>
                    </div>

                    <h4> Pictures </h4>
                    <div class="picContainer" >
                        <img class="picContent" src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/Honeycrisp.jpg/1200px-Honeycrisp.jpg" alt="Aples" width="500" height="600"></img>
                        {/*  Add the Modal stuff here so it pops out */}
                    </div>
                </div>
            </div>
            
            {/*Information on seller */ }
            <div class="">
                <div class="picLeft" >
                    <a href="profilesPage.html">
                        <img class="picLeft" src="https://slm-assets.secondlife.com/assets/10261331/view_large/y_c9278081.jpg?1410113241" alt="Applemaker"/>
                    </a>
                </div>
                <div class="informationColour">
                    <div>
                        <a href="profilesPage.html">
                            <h3>Johnson Smith</h3>
                        </a>
                        <p class = "paragraphColour profileDesc">
                            Insert quick blob about himself
                        </p>
                    </div>

                    <div class='tagBar'>
                    <h4> Tags </h4>
                    <ul class="tagbaritems">
                        <Button
                            size="small" 
                            variant="outlined" 
                            href="" 
                            startIcon={<AddIcon/>}
                            class="tagOption"
                            >
                            BlackMarket
                        </Button>
                        <Button
                            size = "small" 
                            variant="outlined" 
                            href="" 
                            startIcon={<AddIcon/>}
                            class="tagOption produce"
                            >
                            Apples 
                        </Button>
                        <Button
                            size = "small" 
                            variant="outlined" 
                            href="" 
                            startIcon={<AddIcon/>}
                            class="tagOption grain"
                            >
                            Rice 
                        </Button>
                        <Button
                            size = "small" 
                            variant="outlined" 
                            href="" 
                            startIcon={<AddIcon/>}
                            class="tagOption meat"
                            >
                            Cows
                        </Button>
                    </ul>
                    </div>
                    
                </div>
            </div>
        </section>
        );
    }
}
export default DetailedPost