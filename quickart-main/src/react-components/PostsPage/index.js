import React from 'react';
import { Link } from 'react-router-dom';
import userPicture from '../../images/defaultUserPicture.jpg';
import { connect } from 'react-redux';
import store from '../../store';
import './styles.css';
import { posts } from '../../allPosts';
import { reportPost } from '../../actions/reportsActions';
import { setAlert } from '../../actions/alertActions';
import {
  loadAllPosts,
  createPost,
  likePost,
  dislikePost,
} from '../../actions/postsActions';
import { ThreeSixty } from '@material-ui/icons';

/* Component for the Main Posts Page */
class PostsPage extends React.Component {
  state = {

    //Reqiured by Report page
    otherReport: '',
    isReporting: false,

    //Required by like 
    likes: 0,
    dislikes: 0,
    likeUpdated: false,
    dislikeUpdated: false,

    //Search Bar 
    searchResult: '',

    //Required to display to page
    userPrice: 0,
    userCategory: '',
    posts: [],

    
    //Required by CreatePost
    postedBy: "",
    title: '',
    price: 0,
    category: '',
    postEndDate: '',
    pickUpOptions: '',
    info: '',
  };
  isAdmin = ""

  componentDidMount() {
    this.loadPost();
  }

  async loadPost() {
    await this.props.loadAllPosts(localStorage.token);
    let reduxState = store.getState();
    this.setState({ posts: reduxState['postsState'] });
    let userType = reduxState['loginState']['user'];
    this.isAdmin = userType === "admin"
  }

  onChangeEvent = e => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  onPostEvent = e => {
    e.preventDefault();
    if (!this.state.title) {
      this.props.setAlert('A title is required.', 'error');
    } else if (!this.state.category) {
      this.props.setAlert('A category is required.', 'error');
    } else if (!this.state.postEndDate) {
      this.props.setAlert('A post end date is required.', 'error');
    } else if (!this.state.pickUpOptions) {
      this.props.setAlert('A pick up option is required.', 'error');
    } else if (!this.state.info) {
      this.props.setAlert('A description is required.', 'error');
    }else {
      let reduxState = store.getState();
      this.setState({postedBy: reduxState['loginState']['id']})  
      this.props.createPost(this.state, localStorage.token);

    }
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

  //Like and Dislike Button Events
  likeFunction(e) {
    e.preventDefault();
    console.log(e.target.id);

    //If the post has neither been liked or disliked before
    if (this.state.likeUpdated == false && this.state.dislikeUpdated == false) {
      let newLikes = this.state.likes + 1;
      this.setState({ likes: newLikes });
      this.setState({ likeUpdated: true });
    }

    //If the post has been disliked before
    else if (this.state.likeUpdated == false &&this.state.dislikeUpdated == true) {
      let newLikes = this.state.likes + 1;
      let newDislikes = this.state.dislikes - 1;
      this.setState({ likes: newLikes });
      this.setState({ dislikes: newDislikes });
      this.setState({ likeUpdated: true });
      this.setState({ dislikeUpdated: false });
    }

    this.props.likePost(this.state)
  }
  dislikeFunction(e) {
    //If the post has neither been liked or disliked before
    if (this.state.likeUpdated == false && this.state.dislikeUpdated == false) {
      let newDislikes = this.state.dislikes + 1;
      this.setState({ dislikes: newDislikes });
      this.setState({ dislikeUpdated: true });
    }
    else if (this.state.likeUpdated == true && this.state.dislikeUpdated == false) {
      let newDislikes = this.state.dislikes + 1;
      let newLikes = this.state.likes - 1;
      this.setState({ dislikes: newDislikes });
      this.setState({ likes: newLikes });
      this.setState({ dislikeUpdated: true });
      this.setState({ likeUpdated: false });
    }
    this.props.dislikePost(this.state)
    
  }

  searchByTitleName(e) {
    //Database call/query
    //Get Request PostbyName Endpoint, this will get the array of post objects

    this.setState({ searchResult: e.target.value }, () => {});
  }

  searchByMaximumPrice(e) {
    this.setState({ userPrice: parseFloat(e.target.value) }, () => {});
  }

  searchByCategoryName(e) {
    this.setState({ userCategory: e.target.value }, () => {});
  }

  render() {

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

    const newData = this.state.posts.filter(item => {
      //Price filter
      if (this.state.userPrice !== NaN && this.state.userPrice > 0) {
        return parseFloat(item.price) <= this.state.userPrice;
      }

      //Category filter
      if (this.state.userCategory !== '' && this.state.userCategory !== 'Any') {
        return item.category.includes(this.state.userCategory);
      }

      //Title filter
      return item.title.includes(this.state.searchResult);
    });

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
          <h4>{'$' + post.price}</h4>
          <p className='smallMargin'>{post.info}</p>

          <button
            className='btn regularButton likes'
            value={post.likes}
            id={post.id}
            onClick={e => this.likeFunction(e)}
          >
            Likes: {post.likes.length}
          </button>
          <button
            className='btn regularButton dislikes'
            value={post.dislikes}
            id={post.id}
            onClick={e => this.dislikeFunction(e)}
          >
            <span>Dislikes: {post.dislikes.length}</span>
          </button>
          <Link to={{
            pathname: '/DetailPosting',
            state: {post: "here"}
            }}
          className='btn btnDefault-posts'
             
          >
            View 
          </Link>
          {this.isAdmin ? adminDel : userReports}
        </div>
      </div>
    ));

    return (
      <section className='mainBackground'>
        <div className='stickyBarPosts'>
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
              <select
                id='categories'
                onChange={this.searchByCategoryName.bind(this)}
              >
                <option value='Any'>Any</option>
                <option value='Fruit'> Fruit </option>
                <option value='Vegtable'> Vegtable</option>
                <option value='Grain'> Grain </option>
                <option value='Meat'> Meat </option>
                <option value='Other'> Other </option>
              </select>
            </div>
            <h4>Bid Price</h4>
            <input
              type='text'
              className='searchbar'
              placeholder='Maximum Price'
              onChange={this.searchByMaximumPrice.bind(this)}
            ></input>
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
                  <input
                    type='checkbox'
                    id='Location1'
                    name='Location1'
                  ></input>
                  <label> Ottawa</label>
                  <br></br>
                  <input
                    type='checkbox'
                    id='Location1'
                    name='Location1'
                  ></input>
                  <label> Mississauga</label>
                  <br></br>
                  <input
                    type='checkbox'
                    id='Location1'
                    name='Location1'
                  ></input>
                  <label> Markham</label>
                  <br></br>
                </div>
              </div>
            </div>

            <div className='filter'>
              <div id='Tag-Content' className='tagContent'></div>
            </div>
          </div>
        </div>
        <div className='containerPosts'>
          <h2 className='textDefaultColor-Posts'>All Posts</h2>
          <div className='post-form'>
            <div className='userCreateNewPost'>
              <div className='backgroundDefault'>
                <h3>Create New Post: What would you like to sell?</h3>
              </div>
              <form className='form' onSubmit={e => this.onPostEvent(e)}>
                <label className='labelDefault'>Title</label>
                <input
                  className='inputGroup-Posts'
                  type='Title'
                  placeholder='Title'
                  id='title'
                  onChange={this.onChangeEvent}
                />
                <label className='labelDefault'>Price</label>
                <input
                  className='inputGroup-Posts'
                  type='number'
                  placeholder='Price'
                  id='price'
                  onChange={this.onChangeEvent}
                />
                <div>
                  <label className='labelDefault'>Category</label>
                  <select
                    id='categories'
                    className='inputGroup-Posts'
                    id='category'
                    onChange={this.onChangeEvent}
                  >
                    <option value='Fruit'> Fruit </option>
                    <option value='Vegtable'> Vegtable</option>
                    <option value='Grain'> Grain </option>
                    <option value='Meat'> Meat </option>
                    <option value='Other'> Other </option>
                  </select>
                </div>
                <label className='labelDefault'>Post End Date</label>
                <input
                  className='inputGroup-Posts'
                  type='date'
                  id='postEndDate'
                  onChange={this.onChangeEvent}
                />
                <label className='labelDefault'>Picture</label>
                <input className='inputGroup-Posts' type='file' />
                <label className='labelDefault'>
                  Pickup/Delivery Options
                </label>
                <input
                  className='inputGroup-Posts'
                  type='text'
                  placeholder='Pickup/Delivery Options'
                  id='pickUpOptions'
                  onChange={this.onChangeEvent}
                />
                <label className='labelDefault' >
                  Description
                </label>
                <textarea
                  className='inputGroup'
                  placeholder='Your message here'
                  id="info"
                  onChange={this.onChangeEvent}
                ></textarea>
                <input
                  type='submit'
                  value='Submit'
                  className='btn btnDefault-posts'
                />
              </form>
            </div>
            <div className='allPosts'>{filteredPostItems}</div>
            {!this.isAdmin ? reportForm : ''}
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

export default connect(null, {
  setAlert,
  reportPost,
  loadAllPosts,
  createPost,
  likePost,
  dislikePost,
})(PostsPage);
