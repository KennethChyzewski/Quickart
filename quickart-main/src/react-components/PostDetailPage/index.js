import React from 'react';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import { Route, Switch, BrowserRouter, useLocation } from 'react-router-dom';
import { Link , withRouter} from 'react-router-dom';
import { connect } from 'react-redux';
import store from '../../store';
import userPicture from '../../images/defaultUserPicture.jpg';
import { getProfile } from '../../actions/settingsActions';
import { loadOnePosts } from '../../actions/postsActions';

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
    this.setState(reduxState['postsState']);
    this.setState(reduxState['settingsState']);
    console.log(this.state)

   // let userType = state['loginState']['user'];
   // let isAdmin = userType === 'admin';
  }
  

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
    const adminDel = (
      <Button className='title-button btn btnDefaultDeletePost'>
        Delete Post
      </Button>
    );
    const userReports = (
      <Button className='title-button btn btnDefaultReportPost'>
        Report Post
      </Button>
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
          <div>{this.isAdmin ? adminDel : userReports}</div>

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
      </section>
    );
  }
}
export default connect(null, {loadOnePosts}) (DetailedPost);
/*
export default withRouter(
  connect(null, {loadOnePosts} (DetailedPost))
);*/
