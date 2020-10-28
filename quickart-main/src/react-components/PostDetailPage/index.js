import React from 'react'

class DetailedPost extends React.Component {
    render(){
        <section class="containerPosts">
            {/*Title of Post + Bidding progress*/}
            <h1 class="postTitleColour"> Name of Post </h1>
            <div >
                <div class="backgroundDefault">
                    <h3> Submit A Bid </h3>
                    <h4> Last Day to Bid: XX-XX-XXXX</h4>
                </div>

                <form class="form">
                    <textarea class="inputGroup" placeholder="Bid Value in (CAD) "></textarea>
                    <textarea class="inputGroup" placeholder="Your message here"></textarea>
                    <input type="submit" value="Submit" class="btn btn" />
                </form>
            </div>

            {/* Information on product */}
            <div class="posts">
                <div class="infomationColour" >
                    <h4>Product Info/Description</h4>
                    <p class="paragraphColour">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>

                    <h4> PickUp/Delivery Options </h4>
                    <p class="paragraphColour">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                    <h4> Pictures </h4>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/Honeycrisp.jpg/1200px-Honeycrisp.jpg" alt="Aples" width="500" height="600"></img>
                    {/*  Add the Modal stuff here so it pops out */}
                </div>
            </div>
            
            {/*Information on seller */ }
            <div >
                <div>
                    <a href="profilesPage.html">
                        <img class="profilePicCircle" src="https://slm-assets.secondlife.com/assets/10261331/view_large/y_c9278081.jpg?1410113241" alt="Applemaker"/>
                    </a>
                </div>

                <div class="informationColour">
                    <h4>Johnson Smith</h4>
                    <p class = "paragraphColour">
                        Insert quick blob about himself
                    </p>
                    <h5> Tags </h5>
                    <ul class='tagBar'>
                        <a class="tagOption" href=""> + Tag </a>
                        <a class="tagOption" href=""> + Tag </a>
                        <a class="tagOption" href=""> + Tag </a>
                        <a class="tagOption" href=""> + Tag </a>
                    </ul>
                </div>
            </div>
        </section>
    }
}
export default DetailedPost