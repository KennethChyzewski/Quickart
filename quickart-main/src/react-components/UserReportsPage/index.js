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

    const a = (
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
              do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <Link to='/DetailPosting' className='btn btnDefault-report'>
              View Reported Posting
            </Link>
          </div>
        </div>
      );


    const filteredPostItems = newData.map(post => (
      <div className='post backgroundWhite' key={post._id}>
        <div className='lefttGridPost'>
          <Link to='/profile'>
            <img className='circleImgPosts' src={userPicture} alt='' />
            <h4 className='postUser'>{post.postedBy}</h4>
          </Link>
        </div>
        <div className='rightGridPost'>
          <h3>{post.title}</h3>
          <h4>{'$' + post.price}</h4>
          <p className='smallMargin'>{post.description}</p>

          <button
            className='btn regularButton likes'
            value={post.likes}
            id={post._id + '1'}
            onClick={e => this.likeFunction(e)}
          >
            Likes: {post.likes.length}
          </button>
          <button
            className='btn regularButton dislikes'
            value={post.dislikes}
            id={post._id + '2'}
            onClick={e => this.dislikeFunction(e)}
          >
            {/* <span>Dislikes: {post.dislikes.length}</span> */}
            Dislikes: {post.dislikes.length}
          </button>

          <Link
            to={{
              pathname: '/DetailPosting/' + post._id,
            }}
            className='btn btnDefault-posts'
          >
            View
          </Link>
          {this.isAdmin ? (
            <button
              type='button'
              className='btn btnDefaultDeletePost'
              value={post._id}
              onClick={this.onDeletePost}
            >
              Delete Post
            </button>
          ) : (
            <button
              id='userReportBtn'
              type='button'
              value={post._id}
              onClick={this.open_close_report.bind(this)}
              className='btn btnDefaultReportPost'
            >
              Report Post
            </button>
          )}
        </div>
      </div>
    ));


    return (
      <section className='mainBackground'>
        <div className='containerPosts-report'>
          <h1 className='textDefaultColor'>All Reports</h1>
          <div className='allPosts'>
          </div>
        </div>
      </section>
    );
  }
}

export default connect(null)(UserReportsPage);
