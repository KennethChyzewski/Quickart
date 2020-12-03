import React from 'react';
import { posts } from '../../allPosts';
import './styles.css';

class StickyBar extends React.Component {
  state = {
    searchResult: '',
    postArray: [],
  };

  searchByTitleName(e) {
    //Database call/query
    //Get Request PostbyName Endpoint, this will get the array of post objects

    //console.log(posts);

    //console.log('Found');
    this.setState({ postArray: posts }, () => {
      //console.log(this.state.postArray);
    });

    this.setState({ searchResult: e.target.value }, () => {
      const d = this.state.postArray.filter(item => {
        console.log(this.state.searchResult);
        console.log(item.title);
        return item.title.includes(this.state.searchResult);
      });
      console.log(d);
    });

    //console.log(posts);
    //console.log(e.target.value);
  }

  render() {
    return (
      <section>
        <div className='sideBarContainer backgroundBlue borderDefault'>
          <h4>Search For Items</h4>
          <input
            type='text'
            className='searchbar'
            placeholder='Search..'
            onChange={this.searchByTitleName.bind(this)}
          ></input>

          <h4>Categories</h4>
          <div>
            <select id='categories'>
              <option> Fruits </option>
              <option> Vegtables</option>
              <option> Grains </option>
              <option> Meat </option>
            </select>
          </div>
          <h4>Food Tags</h4>
          <div className='tagContent'>
            <div className='tagCheckbox'>
              <input type='checkbox'></input>
              <label> Apples </label>
              <br></br>
              <input type='checkbox'></input>
              <label> Oranges </label>
              <br></br>
              <input type='checkbox'></input>
              <label> Lettuce </label>
              <br></br>
            </div>
          </div>
          <h4>Location</h4>
          <div className='filter'>
            <div id='Tag-Content' className='tagContent'>
              <div className='tagCheckbox'>
                <input
                  type='checkbox'
                  id='Location1'
                  className='Location1'
                ></input>
                <label> Toronto</label>
                <br></br>
                <input type='checkbox' id='Location1' name='Location1'></input>
                <label> Ottawa</label>
                <br></br>
                <input type='checkbox' id='Location1' name='Location1'></input>
                <label> Mississauga</label>
                <br></br>
                <input type='checkbox' id='Location1' name='Location1'></input>
                <label> Markham</label>
                <br></br>
              </div>
            </div>
          </div>
          <h4>Bid Price</h4>
          <div className='filter'>
            <div id='Tag-Content' className='tagContent'>
              <div className='tagCheckbox'>
                <input
                  type='range'
                  min='$1'
                  max='$100'
                  className='slider'
                ></input>
              </div>
            </div>
          </div>
          <h4> </h4>
        </div>
      </section>
    );
  }
}

export default StickyBar;
