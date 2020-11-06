import React from 'react';
import { Link } from 'react-router-dom';
import userPicture from '../../images/defaultUserPicture.jpg';
import StickyBar from '../StickyBar';
import { connect } from 'react-redux';
import store from '../../store';
import './styles.css';

/* Component for the Main Posts Page */
class UserReportsPage extends React.Component {
  render() {
    return (
      <section className='mainBackground'>
        <div className='containerPosts'>
          <StickyBar/>
          <h1 className='textDefaultColor'>All Reports</h1>
            <div className='allPosts'>
              <div className='post backgroundWhite'>
                <div className='lefttGridPost'>
                  <Link to='/profile'>
                    <img className='circleImgPosts' src={userPicture} alt='' />
                    <h4 className='postUser'>Johnson Smith</h4>
                  </Link>
                </div>
                <div className='rightGridPost'>
                  <h4> Report</h4>
                  <p className='smallMargin'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                  <Link to='/DetailPosting' className='btn btnDefault'>
                    View Reported Posting
                  </Link>
                </div>
              </div>
              <div className='post backgroundWhite'>
                <div className='lefttGridPost'>
                  <Link to='/profile'>
                    <img className='circleImgPosts' src={userPicture} alt='' />
                    <h4 className='postUser'>Johnson Smith</h4>
                  </Link>
                </div>
                <div className='rightGridPost'>
                  <h4> Report</h4>
                  <p className='smallMargin'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                  <Link to='/DetailPosting' className='btn btnDefault'>
                    View Reported Posting
                  </Link>
                </div>
              </div>
              <div className='post backgroundWhite'>
                <div className='lefttGridPost'>
                  <Link to='/profile'>
                    <img className='circleImgPosts' src={userPicture} alt='' />
                    <h4 className='postUser'>Johnson Smith</h4>
                  </Link>
                </div>
                <div className='rightGridPost'>
                  <h4> Report</h4>
                  <p className='smallMargin'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                  <Link to='/DetailPosting' className='btn btnDefault'>
                    View Reported Posting
                  </Link>
                </div>
              </div>
              <div className='post backgroundWhite'>
                <div className='lefttGridPost'>
                  <Link to='/profile'>
                    <img className='circleImgPosts' src={userPicture} alt='' />
                    <h4 className='postUser'>Johnson Smith</h4>
                  </Link>
                </div>
                <div className='rightGridPost'>
                  <h4> Report</h4>
                  <p className='smallMargin'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                  <Link to='/DetailPosting' className='btn btnDefault'>
                    View Reported Posting
                  </Link>
                </div>
              </div>
              <div className='post backgroundWhite'>
                <div className='lefttGridPost'>
                  <Link to='/profile'>
                    <img className='circleImgPosts' src={userPicture} alt='' />
                    <h4 className='postUser'>Johnson Smith</h4>
                  </Link>
                </div>
                <div className='rightGridPost'>
                  <h4> Report</h4>
                  <p className='smallMargin'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                  <Link to='/DetailPosting' className='btn btnDefault'>
                    View Reported Posting
                  </Link>
                </div>
              </div>
            </div>
        </div>
      </section>
    );
  }
}

export default connect(null)(UserReportsPage);
