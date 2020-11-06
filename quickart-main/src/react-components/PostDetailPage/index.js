import React from 'react';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';
import store from '../../store';
import userPicture from '../../images/defaultUserPicture.jpg';

import './styles.css';

class DetailedPost extends React.Component {
  render() {
    const state = store.getState();
    let userType = state['loginState']['payload']['accType'];
    let isAdmin = userType === 'admin';

    const adminDel = (
      <Button className='title-button btn btnDefault'>Delete Post</Button>
    );
    const userReports = (
      <Button className='title-button btn btnDefault'>Report Post</Button>
    );

    return (
      <section className='mainBackground'>
        <div className='containerDetailedPosts'>
          <div className='detailPostTitle'>
            <h2 className='textDefaultColor'>Post Title</h2>

            <h4 className='textBlackColor'>Price</h4>
            <h5 className='textBlackColor'>mm/dd/yy</h5>
          </div>
          {/* Information on product */}
          <div className='posts'>
            <div className='infomationColour backgroundGrey'>
              <div>
                <h4 className='textDefaultColor'>Product Info/Description</h4>
                <p className='paragraphColour'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>

                <h4 className='textDefaultColor'>PickUp/Delivery Options </h4>
                <p className='paragraphColour'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
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
                <h4 className='postUser'>Johnson Smith</h4>
              </Link>
            </div>
            <div className='rightGridPost'>
              <p className='smallMargin'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <div className='informationColour'>
                <div className='tagBar'>
                  <h4 className='textDefaultColor'> Tags </h4>
                  <ul className='tagbaritems'>
                    <Button
                      size='small'
                      variant='outlined'
                      href=''
                      startIcon={<AddIcon />}
                      class='tagOption produce'
                    >
                      Apples
                    </Button>
                    <Button
                      size='small'
                      variant='outlined'
                      href=''
                      startIcon={<AddIcon />}
                      class='tagOption grain'
                    >
                      Rice
                    </Button>
                    <Button
                      size='small'
                      variant='outlined'
                      href=''
                      startIcon={<AddIcon />}
                      class='tagOption meat'
                    >
                      Cows
                    </Button>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div>{isAdmin ? adminDel : userReports}</div>
        </div>

        <div className='containerUser'>
          {/*Title of Post + Bidding progress*/}
          <div className='userContactForm'>
            <h1 className='postTitleColour'> Contact Seller Form </h1>
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
                placeholder='Bid Value in (CAD) '
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
      </section>
    );
  }
}
export default DetailedPost;
