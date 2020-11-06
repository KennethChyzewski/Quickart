import React from 'react';
import { Link, withRouter } from 'react-router-dom';

import { connect } from 'react-redux';
import { setAlert } from '../../actions/alertActions';
import { login } from '../../actions/loginActions';
import store from '../../store';
import Alert from '../Alert';

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
      this.props.setAlert('A username is required.', 'error');
    } else if (!this.state.userPassword) {
      this.props.setAlert('A password is required.', 'error');
    } else {
      //Makes a call to the back-end to verify the user credentials
      this.props.login(this.state);
      // Check the redux state after trying to login the user
      const state = store.getState();
      let loginSuccess =
        Object.keys(state['loginState']).length !== 0 ? true : false;
      if (loginSuccess) {
        this.props.history.push('/posts');
      } else {
        this.props.setAlert(
          'Username or Password is incorrect. Please try again.',
          'error'
        );
      }
    }
  };

  render() {
    return (
      <section className='mainBackground-login'>
        <div className='containerForm'>
          <Alert />
          <h1 className='textDefaultColor-SignIn'>Sign in</h1>
          <form className='form' onSubmit={this.onSubmitEvent}>
            <label className='labelDefault'>Username</label>
            <div className='form-group'>
              <input
                className='inputGroup'
                id='username'
                type='text'
                placeholder='Username'
                onChange={this.onChangeEvent}
              />
            </div>
            <label className='labelDefault'>Password</label>
            <div className='form-group'>
              <input
                className='inputGroup'
                id='userPassword'
                type='password'
                placeholder='Password'
                onChange={this.onChangeEvent}
              />
            </div>
            <button
              type='submit'
              value='Login'
              className='btn btnDefault-SignIn'
            >
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

// Replace 'null' with the components state we want to pass to the action
export default withRouter(connect(null, { login, setAlert })(LoginPage));
