import React from 'react';
import { Link } from 'react-router-dom';
import userPicture from '../../images/defaultUserPicture.jpg';
import StickyBar from '../StickyBar';
import { connect } from 'react-redux';
import store from '../../store';
import './styles.css';
import { posts } from '../../allPosts';

/* Component for the Main Posts Page */
class PostsPage extends React.Component {
  state = {
    otherReport: '',
    isReporting: false,
  };

  onChangeEvent = e => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };
  open_close_report() {
    if (this.state.isReporting === false) {
      this.setState({ ['isReporting']: true });
      document.getElementById('reportFormContainer').style.display = 'block';
    } else {
      this.setState({ ['isReporting']: false });
      document.getElementById('reportFormContainer').style.display = 'none';
    }
  }

  render() {
    const store_state = store.getState();
    let userType = store_state['loginState']['payload']['accType'];
    let isAdmin = userType === 'admin';

    const adminDel = (
      <button type='button' className='btn btnDefaultDeletePost'>
        Delete Post
      </button>
    );

    const userReports = (
      <button
        id='userReportBtn'
        type='button'
        onClick={this.open_close_report.bind(this)}
        className='btn btnDefaultReportPost'
      >
        Report Post
      </button>
    );

    const reportForm = (
      <div className='formPopUp' id='reportFormContainer'>
        <form>
          <h1>Report User</h1>
          <h4>Reason: </h4>
          <select id='reason'>
            <option value='Fake Items'>Fake Product</option>
            <option value='Illegal items'>Illegal Items</option>
            <option value='Other'>Other</option>
          </select>
          <input
            className='inputGroup'
            id='otherReport'
            type='text'
            placeholder='Report'
            onChange={this.onChangeEvent}
          ></input>
          <button type='submit' value='report' className='btn btnDefault'>
            Submit Report
          </button>
          <button
            type='button'
            className='btn btnDefault'
            onClick={this.open_close_report.bind(this)}
          >
            Close
          </button>
        </form>
      </div>
    );

    const postItems = posts.map(post => (
      <div className='post backgroundWhite'>
        <div className='lefttGridPost'>
          <Link to='/profile'>
            <img className='circleImgPosts' src={userPicture} alt='' />
            <h4 className='postUser'>{post.postedBy}</h4>
          </Link>
        </div>
        <div className='rightGridPost'>
          <h3>{post.title}</h3>
          <h4>{post.price}</h4>
          <p className='smallMargin'>{post.info}</p>
          <button className='btn regularButton likes'>
            <span>Likes: {post.likes}</span>
          </button>
          <button className='btn regularButton dislikes'>
            <span>Dislikes: {post.dislikes}</span>
          </button>
          <Link to='/DetailPosting' className='btn btnDefault-posts'>
            View
          </Link>
          {isAdmin ? adminDel : userReports}
        </div>
	  </div>
	));

    return (
      <section className='mainBackground'>
        <div className='stickyBarPosts'>
          <StickyBar />
        </div>
        <div className='containerPosts'>
          <h2 className='textDefaultColor-Posts'>All Posts</h2>
          <div className='post-form'>
            <div className='userCreateNewPost'>
              <div className='backgroundDefault'>
                <h3>Create New Post: What would you like to sell?</h3>
              </div>
              <form className='form'>
                <label className='labelDefault'>Title</label>
                <input
                  className='inputGroup-Posts'
                  type='Title'
                  placeholder='Title'
                />
                <label className='labelDefault'>Price</label>
                <input
                  className='inputGroup-Posts'
                  type='number'
                  placeholder='Price'
                />
                <label className='labelDefault'>Post End Date</label>
                <input className='inputGroup-Posts' type='date' />
                <label className='labelDefault'>Picture</label>
                <input className='inputGroup-Posts' type='file' />
                <label className='labelDefault'>Description</label>
                <textarea
                  className='inputGroup'
                  placeholder='Your message here'
                ></textarea>
                <input
                  type='submit'
                  value='Submit'
                  className='btn btnDefault-posts'
                />
              </form>
            </div>
            <div className='allPosts'>
				{postItems}
			</div>
			{!isAdmin ? reportForm : ''}
          </div>
        </div>
      </section>
    );
  }
}

export default connect(null)(PostsPage);
