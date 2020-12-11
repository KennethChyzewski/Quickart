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
// import { login } from '../../actions/pageActions';
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
    postId: "",
    user: "",

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
  isAdmin = "";

  componentDidMount() {
    this.loadPost();
  }

  async loadPost() {
    await this.props.loadAllPosts(localStorage.token);
    let reduxState = store.getState();
    //This check needs to be updated for admin.
    let userType = reduxState['loginState']['accType']; // login state
    this.isAdmin = userType === "admin"
    
    this.setState({ user: reduxState['settingsState']})
    this.setState({ posts: reduxState['postsState'] });
    this.setState({ displayPosts: reduxState['postsState'] });
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
        this.state.category = "Fruit";
      }
      await this.props.createPost(this.state, localStorage.token);
      // this.props.history.push('/profile');
      //Update the page with the newly created post
      localStorage.setItem('previousPage', '/posts');
      this.props.history.push('/loading');
    }
  };

  onDeletePost = async e => {
    let idDeleting = e.target.value;
    await this.props.deletePost(idDeleting, localStorage.token);
    let reduxState = store.getState();
    this.setState({ posts: reduxState['postsState'] });
    this.setState({ displayPosts: reduxState['postsState'] });
    //Update the page with the removed post
    localStorage.setItem('previousPage', '/posts');
    this.props.history.push('/loading');
  };

  onSubmitEvent = async e => {
    e.preventDefault();
    if (!this.state.reason) {
      this.state.reason = "Fake items";
    }
    await this.props.reportPost(this.state);
    console.log("state: ", this.state)
    this.open_close_report();
  };

  open_close_report(e) {
    //e.preventDefault(); 
    if (this.state.isReporting === false) {
      this.setState({ ['isReporting']: true });
      document.getElementById('reportFormContainer').style.display = 'block';
      this.setState({ postId: e.target.value });
    } else {
      this.setState({ ['isReporting']: false });
      document.getElementById('reportFormContainer').style.display = 'none';
      this.props.setAlert('Post has been successfully reported.', 'success');
    }
  };

  //Like and Dislike Button Events
  likeFunction(e) {
    e.preventDefault();
    //Decode the like button and get its Post ID from it
    let postID = e.target.id.substring(0, e.target.id.length - 1);
    this.props.likePost(postID, localStorage.token);
    //Update the like count, which is updated in mongodb but not the local state
    localStorage.setItem('previousPage', '/posts');
    this.props.history.push('/loading');
  }
  dislikeFunction(e) {
    e.preventDefault();
    //Decode the dislike button and get its Post ID from it
    let postID = e.target.id.substring(0, e.target.id.length - 1);
    this.props.dislikePost(postID, localStorage.token);
    //Update the dislike count, which is updated in mongodb but not the local state
    localStorage.setItem('previousPage', '/posts');
    this.props.history.push('/loading');
  }

  searchByTitleName(e) {
    //Database call/query
    //Get Request PostbyName Endpoint, this will get the array of post objects
    this.setState({ searchResult: e.target.value }, () => {});
  }

  searchByMaximumPrice(e) {
    this.setState({ userPrice: parseFloat(e.target.value) }, () => {});
  }

  searchyByLocation(e){
    const target = e.target.value
    
    let reduxState = store.getState()
    const all_posts = reduxState['postsState'];
    let lstposting = []
    if (e.target.value != "Any"){
      all_posts.forEach(element => {
        if (element.location === target){
          lstposting.push(element)
        }
      })
      
      if(lstposting){
        this.setState({displayPosts : lstposting})
      }
    }else {
      this.setState({displayPosts: all_posts})
    }
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
          <select id='reason' onChange={this.onChangeEvent}>
            <option value='Fake Items'>Fake Items</option>
            <option value='Illegal items'>Illegal Items</option>
            <option value='Other'>Other</option>
          </select>
          <input
            className='inputGroup'
            id='reportDescription'
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
            <h4 className='postUser'>{post.name}</h4>
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
                <form className='tagCheckbox'>
                <input
                    type='radio'
                    id='Any'
                    value='Any'
                    name='Location'
                    onClick={this.searchyByLocation.bind(this)}
                  ></input>
                  <label htmlFor='Any'> Any</label>
                  <br></br>
                  <input
                    type='radio'
                    id='Toronto'
                    value='Toronto'
                    name='Location'
                    onClick={this.searchyByLocation.bind(this)}
                  ></input>
                  <label htmlFor='Toronto'> Toronto</label>
                  <br></br>
                  <input
                    type='radio'
                    id='Ottawa'
                    value='Ottawa'
                    name='Location'
                    onClick={this.searchyByLocation.bind(this)}
                  ></input>
                  <label htmlFor='Ottawa'> Ottawa</label>
                  <br></br>
                  <input
                    type='radio'
                    id='Mississauga'
                    value='Mississauga'
                    name='Location'
                    onClick={this.searchyByLocation.bind(this)}
                  ></input>
                  <label htmlFor='Mississauga'> Mississauga</label>
                  <br></br>
                </form>
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
                    <option value='Fruit'> {' '}Fruit{' '} </option>
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
            {this.isAdmin ? "" : reportForm}
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
