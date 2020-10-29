import React from 'react';
import { Link } from 'react-router-dom';

import './styles.css';

/* Component for the Login Page */
class LoginPage extends React.Component {
  render() {
    return (
      <section className='mainBackground'>
        <div className='containerForm'>
          <h1 className='textDefaultColor'>Sign in</h1>
          <form>
            <div className='form-group'>
              <input
                className='inputGroup'
                type='text'
                placeholder='Username'
              />
            </div>
            <div className='form-group'>
              <input
                className='inputGroup'
                type='password'
                placeholder='Password'
              />
            </div>

            <Link to='/posts' type='submit' className='btn btnDefault'>
              Login
            </Link>
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
