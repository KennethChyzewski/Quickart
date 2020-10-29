import React from 'react'
import "./styles.css";

class StickyBar extends React.Component {
    
    render(){
        return (  
        <section>
            <div class="sideBarContainer backgroundBlue borderDefault">  
                <h4>Search For Items</h4>
                <input type="text" class="searchbar" placeholder="Search.."></input>
                <h4>Categories</h4>
                    <div>
                        <select id="categories"> 
                            <option> Alcohol </option>
                            <option> Fruits </option>
                            <option> Vegtables</option>
                            <option> Grains </option>
                            <option> Meat </option>
                        </select>
                    </div>
                <h4>Food Tags</h4>
                    <div class="tagContent">
                        <div class="tagCheckbox">
                            <input type="checkbox"></input> 
                            <label> ONLY VODKA DIMIRTI </label> 
                            <br></br>
                            <input type="checkbox"></input>
                            <label> BAAH WHISKEY </label>
                            <br></br>
                            <input type="checkbox"></input>
                            <label> Cider </label>
                            <br></br>
                        </div>
                    </div>
                <h4>Location</h4>
                    <div class="filter">
                        <div id="Tag-Content" class="tagContent">
                            <div class="tagCheckbox">
                                <input type="checkbox" id="Location1" name="Location1"></input>
                                <label for="Location1">Russia</label>
                                <br></br>
                                <input type="checkbox" id="Location1" name="Location1"></input>
                                <label for="Location1">France</label>
                                <br></br>
                                <input type="checkbox" id="Location1" name="Location1"></input>
                                <label for="Location1">Canada</label>
                                <br></br>
                                <input type="checkbox" id="Location1" name="Location1"></input>
                                <label for="Location1">Japan</label>
                                <br></br>
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
                <h4> </h4>
                
            </div>
        </section>
        );
    }
}

export default StickyBar