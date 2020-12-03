import React from 'react';
import { Link, withRouter } from 'react-router-dom';

import { connect } from 'react-redux';
import { setAlert } from '../../actions/alertActions';
import { signup } from '../../actions/loginActions';
import { updateProfile } from '../../actions/settingsActions';
import store from '../../store';
import Alert from '../Alert';

import './styles.css';

/* Component for the Register Page */
class RegisterPage extends React.Component {
  state = {
    name: "",
    email: "",
    password: "",
    confirmEmail: "",
    confirmPassword: "",
    userLocation: ""
  };

  onChangeEvent = e => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  onSubmitEvent = async(e) => {
    e.preventDefault();
    //Checks if any of the Register fields are empty
    if (!this.state.name) {
      this.props.setAlert('A username is required.', 'error');
    } else if (!this.state.email) {
      this.props.setAlert('An email is required.', 'error');
    } else if (!this.state.password) {
      this.props.setAlert('A password is required.', 'error');
    } else if (!this.state.userLocation) {
      this.props.setAlert('A Location is required.', 'error');
    } else if (this.state.email !== this.state.confirmEmail) {
      this.props.setAlert('The two emails do not match', 'error');
    }else if (this.state.password !== this.state.confirmPassword) {
      this.props.setAlert('The two passwords do not match', 'error');
    }else {
      //Makes a call to the back-end to create a new user with the data provided
      
      await this.props.signup(this.state).then(this.temp())
      //This is too fast we need to wait here for the state to get updated
    }
  };

  temp = () => {
    const state = store.getState()
    console.log(state)
    let setupSuccess = state['loginState']['isAuthenticated'];
    if (setupSuccess) {
      // We need to make the inital profile for the user otherwise it wont exist.
      this.props.updateProfile(this.state)
      this.props.history.push('/profile');
    } else {
      this.props.setAlert(
        'Registration failed. Please try again later.',
        'error'
      );
    }
  }

  render() {
    return (
      <section className='mainBackground-register'>
        <div className='containerForm'>
          <Alert />
          <h1 className='textDefaultColor-Register'>Register</h1>
          <form className='form' onSubmit={this.onSubmitEvent}>
            <label className='labelDefault'>Username</label>
            <div className='form-group'>
              <input
                className='inputGroup'
                id='name'
                type='text'
                placeholder='Ex: Bobby'
                onChange={this.onChangeEvent}
              />
            </div>
            <label className='labelDefault'>Email Address</label>
            <div className='form-group'>
              <input
                className='inputGroup'
                id='email'
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
                id='password'
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

export default withRouter(connect(null, { updateProfile, signup, setAlert })(RegisterPage));
