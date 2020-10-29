import React from 'react';
import { Link } from 'react-router-dom';

import './styles.css';

/* Component for the Register Page */
class RegisterPage extends React.Component {
  state = {
    username: '',
    userLocation: '',
    userEmail: '',
    confirmEmail: '',
    userPassword: '',
    confirmPassword: '',
  };

  onChangeEvent = e => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  onSubmitEvent = e => {
    e.preventDefault();
    //Checks if any of the Register fields are empty
    if (!this.state.username) {
      console.log('A username is required.');
    }
    if (!this.state.userEmail) {
      console.log('An Email is required.');
    }
    if (!this.state.userLocation) {
      console.log('A Location is required.');
    }
    if (!this.state.userPassword) {
      console.log('A password is required.');
    }

    //Confirms whether the user's email and password are the same in both fields
    if (this.state.userEmail !== this.state.confirmEmail) {
      console.log('Emails are not the same.');
    }
    if (this.state.userPassword !== this.state.confirmPassword) {
      console.log('Passwords are not the same.');
    } else {
      //Makes a call to the back-end to create a new user with the data provided
      console.log(this.state);
      console.log('User has successfully been registered.');
    }
  };

  render() {
    return (
      <section className='mainBackground'>
        <div className='containerForm'>
          <h1 className='textDefaultColor'>Register</h1>
          <form className='form' onSubmit={this.onSubmitEvent}>
            <div className='form-group'>
              <input
                className='inputGroup'
                id='username'
                type='text'
                placeholder='Username'
                onChange={this.onChangeEvent}
              />
            </div>
            <div className='form-group'>
              <input
                className='inputGroup'
                id='userLocation'
                type='text'
                placeholder='Location'
                onChange={this.onChangeEvent}
              />
            </div>
            <div className='form-group'>
              <input
                className='inputGroup'
                id='userEmail'
                type='email'
                placeholder='Email Address'
                onChange={this.onChangeEvent}
              />
            </div>
            <div className='form-group'>
              <input
                className='inputGroup'
                id='confirmEmail'
                type='email'
                placeholder='Confirm Email Address'
                onChange={this.onChangeEvent}
              />
            </div>
            <div className='form-group'>
              <input
                className='inputGroup'
                id='userPassword'
                type='password'
                placeholder='Password'
                onChange={this.onChangeEvent}
              />
            </div>
            <div className='form-group'>
              <input
                className='inputGroup'
                id='confirmPassword'
                type='password'
                placeholder='Confirm Password'
                onChange={this.onChangeEvent}
              />
            </div>
            <button type='submit' value='Register' className='btn btnDefault'>
              Register
            </button>
          </form>
          <p>
            Have an Account? <Link to='/login'>Login Here</Link>
          </p>
        </div>
      </section>
    );
  }
}

export default RegisterPage;
