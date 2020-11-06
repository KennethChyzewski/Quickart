import React from 'react';
import { Link, withRouter } from 'react-router-dom';

import { connect } from 'react-redux';
import { setAlert } from '../../actions/alertActions';
import { signup } from '../../actions/loginActions';
import store from '../../store';

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
    } else if (!this.state.userLocation) {
      console.log('A Location is required.');
    } else if (!this.state.userEmail) {
      console.log('An Email is required.');
    } else if (!this.state.userPassword) {
      console.log('A password is required.');
    }
    //Confirms whether the user's email and password are the same in both fields
    else if (this.state.userEmail !== this.state.confirmEmail) {
      console.log('Emails are not the same.');
    } else if (this.state.userPassword !== this.state.confirmPassword) {
      console.log('Passwords are not the same.');
    } else {
      //Makes a call to the back-end to create a new user with the data provided
      this.props.signup(this.state);
      // Check the redux state after trying to signup the user
      const state = store.getState();
      let setupSuccess =
        Object.keys(state['loginState']).length !== 0 ? true : false;
      if (setupSuccess) {
        this.props.history.push('/posts');
      } else {
        //When would mongodb fail??
        this.props.setAlert(
          'Registration failed. Please try again later.',
          'error'
        );
      }
    }
  };

  render() {
    return (
      <section className='mainBackground-register'>
        <div className='containerForm'>
          <h1 className='textDefaultColor-Register'>Register</h1>
          <form className='form' onSubmit={this.onSubmitEvent}>
            <label className='labelDefault'>Username</label>
            <div className='form-group'>
              <input
                className='inputGroup'
                id='username'
                type='text'
                placeholder='Ex: Bobby'
                onChange={this.onChangeEvent}
              />
            </div>
            <label className='labelDefault'>Email Address</label>
            <div className='form-group'>
              <input
                className='inputGroup'
                id='userEmail'
                type='email'
                placeholder='Ex: Bobby@gmail.com'
                onChange={this.onChangeEvent}
              />
            </div>
            <label className='labelDefault'>Confirm Email</label>
            <div className='form-group'>
              <input
                className='inputGroup'
                id='confirmEmail'
                type='email'
                placeholder='Ex: Bobby@gmail.com'
                onChange={this.onChangeEvent}
              />
            </div>
            <label className='labelDefault'>Password</label>
            <div className='form-group'>
              <input
                className='inputGroup'
                id='userPassword'
                type='password'
                placeholder='Ex: BobbyLovesFruits'
                onChange={this.onChangeEvent}
              />
            </div>
            <label className='labelDefault'>Confirm Password</label>
            <div className='form-group'>
              <input
                className='inputGroup'
                id='confirmPassword'
                type='password'
                placeholder='Ex: BobbyLovesFruits'
                onChange={this.onChangeEvent}
              />
            </div>
            <label className='labelDefault'>Location</label>
            <div className='form-group'>
              <input
                className='inputGroup'
                id='userLocation'
                type='text'
                placeholder='Ex: Toronto'
                onChange={this.onChangeEvent}
              />
            </div>
            <button
              type='submit'
              value='Register'
              className='btn btnDefault-register'
            >
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

export default withRouter(connect(null, { signup, setAlert })(RegisterPage));
