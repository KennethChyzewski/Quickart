import React from 'react';
import { Link } from 'react-router-dom';
import store from '../../store';
import './styles.css';

/* Component for the Edit User Profile's Page*/
class EditProfilesPage extends React.Component {
  render() {
    const state = store.getState()
    let userType = state['loginState']['payload']["accType"]
    let isAdmin = userType === "admin"

    const niche = (
      <div className='form-group'>
        <textarea className='inputGroup' placeholder='Niche'></textarea>
      </div>
    )
    return (
      <section className='mainBackground-editProfile'>
        <div className='containerForm'>
          <h1 className='textDefaultColor-editProfile'>Edit Profile</h1>
          <form className='form'>
            <label className='labelDefault'>Name</label>
            <div className='form-group'>
              <input className='inputGroup' type='text' placeholder='Name' />
            </div>

            <label className='labelDefault'>Email Address</label>
            <div className='form-group'>
              <input
                className='inputGroup'
                type='email'
                placeholder='Email Address'
              />
            </div>
            <label className='labelDefault'>Password</label>
            <div className='form-group'>
              <input
                className='inputGroup'
                type='password'
                placeholder='Password'
              />
            </div>
            <label className='labelDefault'>Location</label>
            <div className='form-group'>
              <input
                className='inputGroup'
                type='text'
                placeholder='Location'
              />
            </div>
            <label className='labelDefault'>Biography</label>
            <div className='form-group'>
              <textarea
                className='inputGroup'
                placeholder='Biography'
              ></textarea>
            </div>
            <label className='labelDefault'>Niche</label>
            <div className='form-group'>
              <textarea className='inputGroup' placeholder='Niche'></textarea>
            </div>
            <input
              type='submit'
              value='Submit'
              className='btn btnDefault-editProfile'
            />
            <Link to='/' className='btn btn Delete-Account'>
            {isAdmin ? "":niche}
            <input type='submit' value='Submit' className='btn btnDefault' />
            <Link to='/' className='btn btn'>
              Delete my Account
            </Link>
          </form>
        </div>
      </section>
    );
  }
}

export default EditProfilesPage;
