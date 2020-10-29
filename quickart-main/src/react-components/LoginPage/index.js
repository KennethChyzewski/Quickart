import React from 'react';
import { Link } from 'react-router-dom';

import './styles.css';

/* Component for the Login Page */
class LoginPage extends React.Component {
  state = {
    username: '',
    userPassword: '',
  };

  onChangeEvent = e => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  onSubmitEvent = e => {
    e.preventDefault();
    //Checks if any of the login fields are empty
    if (!this.state.username) {
      console.log('A username is required.');
    }
    if (!this.state.userPassword) {
      console.log('A password is required.');
    } else {
      //Makes a call to the back-end to verify the user credentials
      console.log(this.state);
      console.log('User has successfully been logged in.');
    }
  };

  render() {
    return (
      <section className='mainBackground'>
        <div className='containerForm'>
          <h1 className='textDefaultColor'>Sign in</h1>
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
                id='userPassword'
                type='password'
                placeholder='Password'
                onChange={this.onChangeEvent}
              />
            </div>

            <button type='submit' value='Login' className='btn btnDefault'>
              Login
            </button>
          </form>
          <p>
            Don't have an Account? <Link to='/register'>Register Here</Link>
          </p>
        </div>
      </section>
    );
  }
}

export default LoginPage;
