
import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import store from '../../store';
import { connect } from 'react-redux';

import { updateProfile } from '../../actions/settingsActions';
import { setAlert } from '../../actions/alertActions';

import './styles.css';

/* Component for the Edit User Profile's Page*/
class EditProfilesPage extends React.Component {
  state = {
    name: '',
    email: '',
    password: '',
    location: '',
    biography: '',
    niche: ''
  };

  onChangeEvent = e => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  onSubmitEvent = e => {
    e.preventDefault();

      this.props.updateProfile(this.state);
      // Check the redux state after trying to login the user
      const state = store.getState();
      let updateSuccess =
        Object.keys(state['settingsState']).length !== 0 ? true : false;
      if (updateSuccess) {
        this.props.history.push('/posts');
      } else {
        this.props.setAlert(
          'Profile update failed. Please try again.',
          'error'
        );
      }
  };

  render() {
    // const state = store.getState()
    // let test = state['loginState']
    // let test1 = test['payload']
    // let test2 = test1['accType']
    let isAdmin = false //test === "admin"

    const niche = (
      <div className='form-group'>
        <textarea className='inputGroup' placeholder='Niche'></textarea>
      </div>
    )
    return (
      <section className='mainBackground-editProfile'>
        <div className='containerForm'>
          <h1 className='textDefaultColor-editProfile'>Edit Profile</h1>
          {/* <form className='form'> */}
          <form className='form' onSubmit={this.onSubmitEvent}>
            <label className='labelDefault'>Name</label>
            <div className='form-group'>
              <input 
                id='name'
                className='inputGroup'
                type='text' 
                placeholder='Name'
                onChange={this.onChangeEvent} />
            </div>

            <label className='labelDefault'>Email Address</label>
            <div className='form-group'>
              <input
                id='email'
                className='inputGroup'
                type='email'
                placeholder='Email Address'
                onChange={this.onChangeEvent}
              />
            </div>
            <label className='labelDefault'>Password</label>
            <div className='form-group'>
              <input
                id='password'
                className='inputGroup'
                type='password'
                placeholder='Password'
                onChange={this.onChangeEvent}
              />
            </div>
            <label className='labelDefault'>Location</label>
            <div className='form-group'>
              <input
                id='location'
                className='inputGroup'
                type='text'
                placeholder='Location'
                onChange={this.onChangeEvent}
              />
            </div>
            <label className='labelDefault'>Biography</label>
            <div className='form-group'>
              <textarea
                id='biography'
                className='inputGroup'
                placeholder='Biography'
                onChange={this.onChangeEvent}
              ></textarea>
            </div>
            <label className='labelDefault'>Niche</label>
            <div className='form-group'>
              <textarea 
                id='niche'
                className='inputGroup'
                placeholder='Niche'
                onChange={this.onChangeEvent}></textarea>
            </div>
            {/* <input
              type='submit'
              value='Submit'
              className='btn btnDefault-editProfile'
            /> */}
            <button
              type='submit'
              value='Submit'
              className='btn btnDefault-SignIn'
            >
              Submit
            </button>

            {isAdmin ? "":niche}
            {/* <input type='submit' value='Submit' className='btn btnDefault' /> */}
            <Link to='/' className='btn btnDefault'>
              Delete my Account
            </Link>
          </form>
        </div>
      </section>
    );
  }
}

export default withRouter(connect(null, { updateProfile, setAlert })(EditProfilesPage));
