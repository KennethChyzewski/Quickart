import React from 'react'
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import store from '../../store';

import "./styles.css";

class DetailedPost extends React.Component {

    render(){
        const state = store.getState()
        let userType = state['loginReducer']['payload']["accType"]
        let isAdmin = userType === "admin"

        const adminDel = (
        <Button className='title-button btn btnDefault'>
            Delete Post
        </Button>
        )
        const userReports = (
            <Button className='title-button btn btnDefault'>
              Report Post
            </Button>
          )

        return (
        <section className='mainBackground'>
            <div className="containerDetailedPosts">
                {/*Title of Post + Bidding progress*/}
                <div>
                    {isAdmin ? adminDel: userReports }  
                    <h1 className="postTitleColour"> Name of Post </h1>
                </div>
                <div>
                    <div className="backgroundDefault">
                        <h3> Last Day to Bid: XX-XX-XXXX</h3>
                    </div>

                    <form className="form">
                        <textarea className="inputGroup" placeholder="Bid Value in (CAD) "></textarea> 
                        <textarea className="inputGroup" placeholder="Your message here"></textarea> 
                        <br></br>
                        <input type="submit" value="Submit" className="btn btn" />
                    </form>
                </div>

                {/* Information on product */}
                <div className="posts">
                    <div className="infomationColour" >
                        <div>
                            <h4 className='textDefaultColor'>Product Info/Description</h4>
                            <p className="paragraphColour">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </p>

                            <h4 className='textDefaultColor'>PickUp/Delivery Options </h4>
                            <p className="paragraphColour">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </p>
                        </div>

                        <h4 className='textDefaultColor'> Pictures </h4>
                        <div className="picContainer" >
                            <img className="picContent" src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/Honeycrisp.jpg/1200px-Honeycrisp.jpg" alt="Aples" width="500" height="600"></img>
                            {/*  Add the Modal stuff here so it pops out */}
                        </div>
                    </div>
                </div>
                
                {/*Information on seller */ }
                <div className="">
                    <div className="picLeft" >
                        <a href="profilesPage.html">
                            <img className="picLeft" src="https://slm-assets.secondlife.com/assets/10261331/view_large/y_c9278081.jpg?1410113241" alt="Applemaker"/>
                        </a>
                    </div>
                    <div className="informationColour">
                        <div>
                            <a href="profilesPage.html">
                                <h3>Johnson Smith</h3>
                            </a>
                            <p className = "paragraphColour profileDesc">
                                Insert quick blob about himself
                            </p>
                        </div>

                        <div className='tagBar'>
                        <h4 className='textDefaultColor'> Tags </h4>
                        <ul className="tagbaritems">
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
            </div>
        </section>
        );
    }
}
export default DetailedPost