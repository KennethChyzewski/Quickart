import React from 'react';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import { Route, Switch, BrowserRouter, useLocation } from 'react-router-dom';
import { Link , withRouter} from 'react-router-dom';
import { connect } from 'react-redux';
import store from '../../store';
import userPicture from '../../images/defaultUserPicture.jpg';
import { getProfile } from '../../actions/settingsActions';
import { loadOnePosts, deletePost } from '../../actions/postsActions';
import { reportPost } from '../../actions/reportsActions'

import './styles.css';

class DetailedPost extends React.Component {
  state = {
    postId: "", 
    tags: []
  };
  isAdmin = "";

  componentDidMount() {
    this.loadPost()
  }

  async loadPost() {
    await this.setState({postId: window.location.pathname.split('/')[2]})  
    await this.props.loadOnePosts(this.state.postId, localStorage.token);
    let reduxState = store.getState();

    let userType = reduxState['loginState']['accType'];
    this.isAdmin = userType === "admin"
    
    this.setState(reduxState['postsState']);
    this.setState(reduxState['settingsState']);

    
  // let userType = state['loginState']['user'];
  // this.isAdmin = userType === 'admin';
  }

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
  

  render() {
    // const allTags = (<div> </div>)
    // console.log(this.state)
    
    const allTags = this.state.tags.map(tag => (
      <Button
        size='small'
        variant='outlined'
        href=''
        startIcon={<AddIcon />}
        class={"tagOption-" + tag}
      >
        {tag}
      </Button>
  ))

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

    return (
      <section className='mainBackground'>
        <div className='containerDetailedPosts'>
          <div className='detailPostTitle'>

            <h2 className='textDefaultColor'>{this.state.title}</h2>

            <h4 className='textBlackColor'>{this.state.price}</h4>
            <h5 className='textBlackColor'>{this.state.postEndDate}</h5>
          </div>
          {/* Information on product */}
          <div className='posts'>
            <div className='infomationColour backgroundGrey'>
              <div>
                <h4 className='textDefaultColor'>Product Info/Description</h4>
                <p className='paragraphColour'>
                  {this.state.info}
                </p>

                <h4 className='textDefaultColor'>PickUp/Delivery Options </h4>
                <p className='paragraphColour'>
                  {this.state.pickUpOptions}
                </p>
              </div>
            </div>
          </div>
          <div className='informationColor-2'>
            <div className='detailPictureTitle'>
              <h3 className='textDefaultColor'>Pictures</h3>
            </div>
            <div className='picContainer'>
              <img
                className='picContent'
                src='https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/Honeycrisp.jpg/1200px-Honeycrisp.jpg'
                alt='Aples'
                width='500'
                height='600'
              ></img>
              {/*  Add the Modal stuff here so it pops out */}
            </div>
          </div>

          {/*Information on seller */}
          <div className='detailPictureTitle-2'>
            <h3 className='textDefaultColor'>Seller Information</h3>
          </div>
          <div className='postDetailsPage backgroundGrey'>
            <div className='lefttGridPost'>
              <Link to='/profile'>
                <img className='circleImgPosts' src={userPicture} alt='' />
                <h4 className='postUser'>{this.state.name}</h4>
              </Link>
            </div>
            <div className='rightGridPost'>
              <p className='smallMargin'>
                {this.state.biography}
              </p>
              <div className='informationColour'>
                <div className='tagBar'>
                  <h4 className='textDefaultColor'> Tags </h4>
                  <ul className='tagbaritems'>
                    {allTags}
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div>
            {this.isAdmin ? (
            <button
              type='button'
              className='btn btnDefaultDeletePost'
              value={this.state.postId}
              onClick={this.onDeletePost}
            >
              Delete Post
            </button>
          ) : (
            <button
              id='userReportBtn'
              type='button'
              value={this.state.postId}
              onClick={this.open_close_report.bind(this)}
              className='btn btnDefaultReportPost'
            >
              Report Post
            </button>
          )}
          </div>

          <div className='contactForm'>
            {/*Title of Post + Bidding progress*/}
            <div className='userContactForm'>
              <h1 className='postTitleColour'> Contact Seller Form </h1>
              <form className='form'>
                <label className='labelDefault'>Message Title</label>
                <input
                  className='inputGroup-Posts'
                  type='Title'
                  placeholder='Message Title'
                />
                <label className='labelDefault'>Price</label>
                <input
                  className='inputGroup-Posts'
                  type='number'
                  placeholder='Price in (CAD)'
                />
                <label className='labelDefault'>Description</label>
                <textarea
                  className='inputGroup'
                  placeholder='Your message here'
                ></textarea>
                <input
                  type='submit'
                  value='Submit'
                  className='btn btnDefault-Detail'
                />
              </form>
            </div>
          </div>
        </div>
        {!this.isAdmin ? reportForm : ''}
      </section>
    );
  }
}
export default connect(null, {loadOnePosts, deletePost, reportPost}) (DetailedPost);
