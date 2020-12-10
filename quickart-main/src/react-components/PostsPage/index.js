import React from 'react';
import { Link, withRouter } from 'react-router-dom';
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
  deletePost,
} from '../../actions/postsActions';
import Alert from '../Alert';
import { ThreeSixty } from '@material-ui/icons';

/* Component for the Main Posts Page */
class PostsPage extends React.Component {
  state = {
    //Pretty sure this is mandatory by default
    category: 'Fruit',
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
    displayPosts: [],
    posts: [],

    //Required by CreatePost
    postedBy: '',
    title: '',
    price: 0,
    category: '',
    postEndDate: '',
    pickUpOptions: '',
    description: '',
  };
  isAdmin = '';

  componentDidMount() {
    this.loadPost();
  }

  async loadPost() {
    await this.props.loadAllPosts(localStorage.token);
    let reduxState = store.getState();
    this.setState({ posts: reduxState['postsState'] });
    this.setState({ displayPosts: reduxState['postsState'] });

    //This check needs to be updated for admin.
    let userType = reduxState['loginState']['user'];
    this.isAdmin = userType === 'admin';
  }

  onChangeEvent = e => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  onPostEvent = async e => {
    e.preventDefault();
    if (!this.state.title) {
      this.props.setAlert('A Title is required.', 'error2');
    } else if (!this.state.price) {
      this.props.setAlert('A Price is required.', 'error2');
    } else if (this.state.price < 0) {
      this.props.setAlert('A price must be a positive value.', 'error2');
      return;
    }
    // else if (!this.state.category) {
    //   this.props.setAlert('A category is required.', 'error');
    // }
    else if (!this.state.postEndDate) {
      this.props.setAlert('A post end date is required.', 'error2');
    } else if (!this.state.pickUpOptions) {
      this.props.setAlert('A pick up option is required.', 'error2');
    } else if (!this.state.description) {
      this.props.setAlert('A description is required.', 'error2');
    } else {
      //Default 'Fruit' bug fix....
      if (!this.state.category) {
        // this.setState({ category: "Fruit" });
        this.state.category = 'Fruit';
      }
      await this.props.createPost(this.state, localStorage.token);
      this.props.history.push('/profile');
    }
  };

  onDeletePost = e => {
    let idDeleting = e.target.value;
    this.props.deletePost(idDeleting, localStorage.token);
    let reduxState = store.getState();
    this.setState({ posts: reduxState['postsState'] });
    this.setState({ displayPosts: reduxState['postsState'] });
  };

  onSubmitEvent = e => {
    e.preventDefault();
    //Update the redux state
    this.props.reportPost(this.state);
    this.open_close_report();
  };

  open_close_report = e => {
    let idreported = e.target.value;
    if (this.state.isReporting === false) {
      this.setState({ ['isReporting']: true });
      document.getElementById('reportFormContainer').style.display = 'block';
    } else {
      this.setState({ ['isReporting']: false });
      document.getElementById('reportFormContainer').style.display = 'none';
    }
  };

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
    else if (
      this.state.likeUpdated == false &&
      this.state.dislikeUpdated == true
    ) {
      let newLikes = this.state.likes + 1;
      let newDislikes = this.state.dislikes - 1;
      this.setState({ likes: newLikes });
      this.setState({ dislikes: newDislikes });
      this.setState({ likeUpdated: true });
      this.setState({ dislikeUpdated: false });
    }

    this.props.likePost(this.state);
  }
  dislikeFunction(e) {
    //If the post has neither been liked or disliked before
    if (this.state.likeUpdated == false && this.state.dislikeUpdated == false) {
      let newDislikes = this.state.dislikes + 1;
      this.setState({ dislikes: newDislikes });
      this.setState({ dislikeUpdated: true });
    } else if (
      this.state.likeUpdated == true &&
      this.state.dislikeUpdated == false
    ) {
      let newDislikes = this.state.dislikes + 1;
      let newLikes = this.state.likes - 1;
      this.setState({ dislikes: newDislikes });
      this.setState({ likes: newLikes });
      this.setState({ dislikeUpdated: true });
      this.setState({ likeUpdated: false });
    }
    this.props.dislikePost(this.state);
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
    const target = e.target.value;

    if (target != 'Any') {
      let reduxState = store.getState();
      let temp = reduxState['postsState'];
      let lstposting = [];

      temp.forEach(element => {
        if (element.tags.includes(target)) {
          lstposting.push(element);
        }
      });
      this.setState({ displayPosts: lstposting });
    } else {
      this.setState({ displayPosts: this.state.posts });
    }
  }

  render() {
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

    const newData = this.state.displayPosts.filter(item => {
      //Price filter
      if (this.state.userPrice !== NaN && this.state.userPrice > 0) {
        return parseFloat(item.price) <= this.state.userPrice;
      }

      //Title filter
      return item.title.includes(this.state.searchResult);
    });

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
        <Alert />
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
                    <option selected value='Fruit'>
                      {' '}
                      Fruit{' '}
                    </option>
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
                <label className='labelDefault'>Pickup/Delivery Options</label>
                <input
                  className='inputGroup-Posts'
                  type='text'
                  placeholder='Pickup/Delivery Options'
                  id='pickUpOptions'
                  onChange={this.onChangeEvent}
                />
                <label className='labelDefault'>Description</label>
                <textarea
                  className='inputGroup'
                  placeholder='Your message here'
                  id='description'
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

export default withRouter(
  connect(null, {
    setAlert,
    reportPost,
    loadAllPosts,
    createPost,
    likePost,
    dislikePost,
    deletePost,
  })(PostsPage)
);

// export default connect(null, {
//   setAlert,
//   reportPost,
//   loadAllPosts,
//   createPost,
//   likePost,
//   dislikePost,
//   deletePost,
// })(PostsPage);
