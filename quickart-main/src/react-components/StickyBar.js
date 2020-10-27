import React from 'react'

class StickyBar extends React.Component {
    render(){
            <div class="sideBarContainer">  
                <h4>Search For Items</h4>
                <input type="text" placeholder="Search.."></input>
                
                <h4>Food Tags</h4>
                <div class="filter">
                    <div id="Tag-Content" class="tagContent">
                        <a href="Tag">+Tag</a>
                    </div>
                </div>
                <h4>Location</h4>
                <div class="filter">
                    <div id="Tag-Content" class="tagContent">
                        <a href="Tag">+Tag</a>
                    </div>
                </div>
                <h4>Bid Price</h4>
                <div class="filter">
                    <div id="Tag-Content" class="tagContent">
                        <a href="Tag">+Tag</a>
                    </div>
                </div>
            </div>  
    }
}