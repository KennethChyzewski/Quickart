import React from 'react'
import "./styles.css";

class StickyBar extends React.Component {
    
    render(){
        return (  
        <section>
            <div class="sideBarContainer navBarPadding">  
                <h4>Search For Items</h4>
                <input type="text" class="searchbar" placeholder="Search.."></input>
                <h4>Food Tags</h4>
                    <div class="tagContent">
                        <div class="tagCheckbox">
                            <input type="checkbox"></input>
                            <label> Apples </label>
                        </div>
                    </div>
                <h4>Location</h4>
                    <div class="filter">
                        <div id="Tag-Content" class="tagContent">
                        <div class="tagCheckbox">
                                <input type="checkbox" id="Location1" name="Location1"></input>
                                <label for="Location1">Hell</label>
                            </div>
                        </div>
                    </div>
                <h4>Bid Price</h4>
                    <div class="filter">
                        <div id="Tag-Content" class="tagContent">
                            <div class="tagCheckbox">
                                <input type="range" min="$1" max= "$100" value="100" class="slider"></input>
                            </div>
                        </div>
                    </div>
                
            </div>
        </section>
        );
    }
}

export default StickyBar