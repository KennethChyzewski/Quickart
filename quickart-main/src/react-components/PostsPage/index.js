import React from 'react';
import { Link } from 'react-router-dom';
import userPicture from '../../images/defaultUserPicture.jpg';

import './styles.css';

/* Component for the Main Posts Page */
class PostsPage extends React.Component {
  render() {
    return (
      <section className='mainBackground'>
        <div className='containerPosts'>
          <h1 className='textDefaultColor'>Posts</h1>
          <div className='post-form'>
            <div className='backgroundDefault'>
              <h3>What would you like to sell?</h3>
            </div>
            <form className='form'>
              <textarea
                className='inputGroup'
                placeholder='Your message here'
              ></textarea>
              <input type='submit' value='Submit' className='btn btn' />
            </form>
            <div className='allPosts'>
              <div className='post backgroundWhite'>
                <div className='lefttGridPost'>
                  <Link to='/profile'>
                    <img className='circleImgPosts' src={userPicture} alt='' />
                    <h4>Johnson Smith</h4>
                  </Link>
                </div>
                <div className='rightGridPost'>
                  <p className='smallMargin'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                  <button className='btn'>
                    <span>Likes: 1</span>
                  </button>
                  <Link to='/profile' className='btn btnDefault'>
                    View
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default PostsPage;
