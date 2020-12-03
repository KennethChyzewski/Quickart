import React from 'react';
import { Link } from 'react-router-dom';
import userPicture from '../../images/defaultUserPicture.jpg';
import StickyBar from '../StickyBar';
import { connect } from 'react-redux';
import store from '../../store';
import './styles.css';
import { posts } from '../../allPosts';
import { reportPost } from '../../actions/reportsActions';
import { setAlert } from '../../actions/alertActions';
import { ThreeSixty } from '@material-ui/icons';

/* Component for the Main Posts Page */
class PostsPage extends React.Component {
  state = {
    otherReport: '',
    isReporting: false,
    likes: 0,
    dislikes: 0,
    likeUpdated: false,
    dislikeUpdated: false,
    searchResult: '',
  };

  onChangeEvent = e => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  onSubmitEvent = e => {
    e.preventDefault();
    //Update the redux state
    this.props.reportPost(this.state);
    // Check the redux state after trying to login the user
    //const state = store.getState();
    // let updateSuccess =
    //   Object.keys(state['settingsState']).length !== 0 ? true : false;
    // if (!updateSuccess) {
    //   this.props.setAlert(
    //     'Create post failed. Please try again.',
    //     'error'
    //   );
    // }
    this.open_close_report();
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

  likeFunction(e) {
    e.preventDefault();
    console.log(e.target.id);

    //If the post has neither been liked or disliked before
    if (this.state.likeUpdated == false && this.state.dislikeUpdated == false) {
      //console.log('Liked Post');
      console.log(e.currentTarget.value);
      let newLikes = this.state.likes + 1;
      //console.log(this.state.likeUpdated);
      this.setState({ likes: newLikes });
      this.setState({ likeUpdated: true });
      //console.log((e.currentTarget.value += 1));
    }
    //If the post has been disliked before
    else if (
      this.state.likeUpdated == false &&
      this.state.dislikeUpdated == true
    ) {
      //console.log('Liked Post');
      //console.log(e.currentTarget.value);
      let newLikes = this.state.likes + 1;
      let newDislikes = this.state.dislikes - 1;
      this.setState({ likes: newLikes });
      this.setState({ dislikes: newDislikes });
      this.setState({ likeUpdated: true });
      this.setState({ dislikeUpdated: false });
      //console.log(this.state.dislikeUpdated);
    }

    //Update the backend likes counter for specified post
  }
  dislikeFunction(e) {
    //If the post has neither been liked or disliked before
    if (this.state.likeUpdated == false && this.state.dislikeUpdated == false) {
      console.log('disliked Post');
      //console.log(e.currentTarget.value);
      let newDislikes = this.state.dislikes + 1;
      this.setState({ dislikes: newDislikes });
      this.setState({ dislikeUpdated: true });
    }
    //If the post has been liked before
    else if (
      this.state.likeUpdated == true &&
      this.state.dislikeUpdated == false
    ) {
      //console.log('disliked Post');
      //console.log(e.currentTarget.value);
      let newDislikes = this.state.dislikes + 1;
      let newLikes = this.state.likes - 1;
      this.setState({ dislikes: newDislikes });
      this.setState({ likes: newLikes });
      this.setState({ dislikeUpdated: true });
      this.setState({ likeUpdated: false });

      //console.log(this.state.dislikeUpdated);
    }

    //Update the backend dislikes counter for specified post
  }

  searchByTitleName(e) {
    //Database call/query
    //Get Request PostbyName Endpoint, this will get the array of post objects

    this.setState({ searchResult: e.target.value }, () => {});
  }

  render() {
    const store_state = store.getState();
    let userType = store_state['loginState']['user'];
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
        {/* <form> */}
        <form className='form' onSubmit={this.onSubmitEvent}>
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
          <button type='submit' value='report' className='btn btnDefault-posts'>
            Submit Report
          </button>
          <button
            type='button'
            className='btn btnDefault-posts'
            onClick={this.open_close_report.bind(this)}
          >
            Close
          </button>
        </form>
      </div>
    );

    {
      /*This will pull data from the back-end. It is currently pulling data from the 'allPosts.js' file found in the root directory*/
    }
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

          <button
            className='btn regularButton likes'
            value={post.likes}
            onClick={e => this.likeFunction(e)}
          >
            <span>Likes: {this.state.likes + post.likes}</span>
          </button>
          <button
            className='btn regularButton dislikes'
            value={post.dislikes}
            onClick={e => this.dislikeFunction(e)}
          >
            <span>Dislikes: {this.state.dislikes + post.dislikes}</span>
          </button>
          <Link to='/DetailPosting' className='btn btnDefault-posts'>
            View
          </Link>
          {isAdmin ? adminDel : userReports}
        </div>
      </div>
    ));

    const newData = posts.filter(item => {
      //console.log(this.state.searchResult);
      //console.log(item.title);
      return item.title.includes(this.state.searchResult);
    });
    //console.log(newData);

    const filteredPostItems = newData.map(post => (
      <div className='post backgroundWhite' key={post.id}>
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

          <button
            className='btn regularButton likes'
            value={post.likes}
            id={post.id}
            onClick={e => this.likeFunction(e)}
          >
            Likes: {this.state.likes + post.likes}
          </button>
          <button
            className='btn regularButton dislikes'
            value={post.dislikes}
            id={post.id}
            onClick={e => this.dislikeFunction(e)}
          >
            <span>Dislikes: {this.state.dislikes + post.dislikes}</span>
          </button>
          <Link to='/DetailPosting' className='btn btnDefault-posts'>
            View
          </Link>
          {isAdmin ? adminDel : userReports}
        </div>
      </div>
    ));
    //Like and Dislike Button Events

    return (
      <section className='mainBackground'>
        <div className='stickyBarPosts'>
          <StickyBar />
        </div>
        <div className='containerPosts'>
          <h2 className='textDefaultColor-Posts'>All Posts</h2>
          <input
            type='text'
            className='searchbar'
            placeholder='Search..'
            onChange={this.searchByTitleName.bind(this)}
          ></input>
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
                <label className='labelDefault'>Pickup/Delivery Options</label>
                <input
                  className='inputGroup-Posts'
                  type='text'
                  placeholder='Pickup/Delivery Options'
                />
                <label className='labelDefault'>Description</label>
                <label className='labelDefault'>Post End Date</label>

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
            <div className='allPosts'>{filteredPostItems}</div>
            {!isAdmin ? reportForm : ''}
          </div>
        </div>
      </section>
    );
  }
}

// Map redux state to this components porps
// const mapStateToProps = state => ({
//   test: state.loginState
// })

export default connect(null, { setAlert, reportPost })(PostsPage);
