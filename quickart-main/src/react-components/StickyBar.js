import React from 'react'

class StickyBar extends React.Component {
    render(){
            <div class="sideBarContainer">  
                <h4>Search For Items</h4>
                <input type="text" class="searchbar" placeholder="Search.."></input>
                
                <h4>Food Tags</h4>
                <div class="filter">
                    <div id="Tag-Content" class="tagContent">
                    <div class="tagCheckbox">
                            <input type="checkbox" id="Food1" name="Food1">
                                <label for="Food1">Apples</label>
                                <br></br>
                            </input>
                        </div>
                    </div>
                </div>
                <h4>Location</h4>
                <div class="filter">
                    <div id="Tag-Content" class="tagContent">
                    <div class="tagCheckbox">
                            <input type="checkbox" id="Location1" name="Location1">
                                <label for="Location1">Hell</label>
                                <br></br>
                            </input>
                        </div>
                    </div>
                </div>
                <h4>Bid Price</h4>
                <div class="filter">
                    <div id="Tag-Content" class="tagContent">
                        <div class="tagCheckbox">
                            <input type="checkbox" id="Price1" name="Price1">
                                <label for="Price">0$ - 100$</label>
                                <br></br>
                            </input>
                        </div>
                    </div>
                </div>
            </div>  
    }
}