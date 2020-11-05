import React from 'react';
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';
import { setAlert } from '../../actions/alertActions';
import { login } from '../../actions/loginActions';

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
      //console.log('A username is required.');
      this.props.setAlert('A username is required.', 'error');
    }
    else if (!this.state.userPassword) {
      // console.log('A password is required.');
      this.props.setAlert('A password is required.', 'error');
    } else {
      //Makes a call to the back-end to verify the user credentials
      // console.log(this.state);
      // console.log('User has successfully been logged in.');
      this.props.login(this.state);
    }
  };

  render() {
    return (
      <section className='mainBackground'>
        <div className='containerForm'>
          <h1 className='textDefaultColor'>Sign in</h1>
          {/* <form className='form' onSubmit={this.onSubmitEvent}> */}
          <form className='form'>
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
          </form>
          <button onClick={this.onSubmitEvent} type='submit' value='Login' className='btn btnDefault'>
            <Link style={{ color: '#333' }} to='/posts'>Login</Link>
          </button>
          <p>
            Don't have an Account? <Link to='/register'>Register Here</Link>
          </p>
        </div>
      </section>
    );
  }
}

// Replace 'null' with the components state we want to pass to the action
export default connect(null, { login, setAlert })(LoginPage);
