import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import userPicture from '../../images/defaultUserPicture.jpg';
import store from '../../store';
import './styles.css';

/* Component for the User Profile Page */
class ProfilesPage extends React.Component {
  render() {
    const state = store.getState()
    let userType = state['loginState']['payload']["accType"]
    let isAdmin = userType === "admin"

    const postings = (
      <div className='profile-posts'>
        <div className='profile-post-title'>
          <h2 className='textDefaultColor'>Posts</h2>
        </div>
        <div className='backgroundWhite'>
          <div>
            <h3>
              <Link to='/posts'>Title</Link>
            </h3>
            <h4>Date</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
              do eiusmod tempor incididunt ut labore et dolore magna
              aliqua.
            </p>
          </div>
        </div>
      </div>
    )
    
    const niche = (
      <div>
        <h2 className='textDefaultColor'>Niche</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
    )
    const tags = (
      <div className='informationColour'>
        <div className='tagBar'>
          <h2 className='textDefaultColor'> Tags </h2>
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
    )
    const userReports = (
      <Link to='/userReports' className='btn btnDefault'>
        User Reports
      </Link>
    )

    return (
      <section className='mainBackground-profile'>
        <div className='containerProfile'>
          <div className='profileArea'>
          <div className='buttons smallMargin'>
                <Link to='/editProfile' className='btn btnDefault'>
                  Edit Profile
                </Link>
                {isAdmin ? "":userReports}
            </div>
            
            <div className='profile-top backgroundDefault'>
              <img className='profileImg' src={userPicture} alt='' />
              <h1>Johnson Smith</h1>
              <p>Toronto, ON</p>
            </div>

            <div className='profile-about backgroundGrey '>
              <h2 className='textDefaultColor'>Biography</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              
              {isAdmin ? "" : niche}
              {isAdmin ? "" : tags}
            </div>
            {isAdmin ? "" : postings}
        </div>
        </div>
      </section>
    );
  }
}

export default ProfilesPage;
