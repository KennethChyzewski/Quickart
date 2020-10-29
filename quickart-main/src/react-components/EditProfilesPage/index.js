import React from 'react';
import { Link } from 'react-router-dom';

import './styles.css';

/* Component for the Edit User Profile's Page*/
class EditProfilesPage extends React.Component {
  render() {
    return (
      <section className='mainBackground'>
        <div className='containerForm'>
          <h1 className='textDefaultColor'>Edit Profile</h1>
          <form className='form'>
            <div className='form-group'>
              <input className='inputGroup' type='text' placeholder='Name' />
            </div>
            <div className='form-group'>
              <input
                className='inputGroup'
                type='text'
                placeholder='Location'
              />
            </div>
            <div className='form-group'>
              <input
                className='inputGroup'
                type='email'
                placeholder='Email Address'
              />
            </div>
            <div className='form-group'>
              <input
                className='inputGroup'
                type='password'
                placeholder='Password'
              />
            </div>
            <div className='form-group'>
              <textarea
                className='inputGroup'
                placeholder='Biography'
              ></textarea>
            </div>
            <div className='form-group'>
              <textarea className='inputGroup' placeholder='Niche'></textarea>
            </div>
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
