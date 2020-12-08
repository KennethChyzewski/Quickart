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
    //username: '',
    //userPassword: '',
    // name: "",
    email: "test@test.com",
    // avatar: "bruh",
    password: "",
    // date: ""
  };

  onChangeEvent = e => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  onSubmitEvent = async(e) => {
    e.preventDefault();
    //Checks if any of the login fields are empty
    if (!this.state.email) {
      this.props.setAlert('An email is required.', 'error');
    } else if (!this.state.password) {
      this.props.setAlert('A password is required.', 'error');

      //Checks if it's a valid user/password combination. (Hardcoding the regular user account, user/user due to the lack of a back-end and database)
    } else{
      //Makes a call to the back-end to verify the user credentials
      await this.props.login(this.state);
      // Check the redux state after trying to login the user
      const state = await store.getState();
      let loginSuccess = state['loginState']['isAuthenticated']
      if (loginSuccess) {
        this.props.history.push('/profile');
        // this.props.history.push('/posts');
      } else {
        this.props.setAlert(
          'Email or Password is incorrect. Please try again.',
          'error'
        );
      }
      //For any invalid username and password combinations
    } 
  };

  render() {
    return (
      <section className='mainBackground-login'>
        <div className='containerForm'>
          <Alert />
          <h1 className='textDefaultColor-SignIn'>Sign in</h1>
          <form className='form' onSubmit={this.onSubmitEvent}>
            <label className='labelDefault'>Email</label>
            <div className='form-group'>
              <input
                className='inputGroup'
                id='email'
                type='text'
                placeholder='myemail@quickart.com'
                onChange={this.onChangeEvent}
              />
            </div>
            <label className='labelDefault'>Password</label>
            <div className='form-group'>
              <input
                className='inputGroup'
                id='password'
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
export default withRouter(connect(null, { login, setAlert})(LoginPage));
