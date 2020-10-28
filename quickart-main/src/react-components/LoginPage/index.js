import React from 'react';

import "./styles.css";

/* Component for the RegisterPage */
class LoginPage extends React.Component {
  
  render() {
    console.log(this.props)
    return (
      <div className='navBarPadding'>
        <h1 className='loginPage__h1-text'>LoginPage</h1>
      </div>
    );
  }
}

export default LoginPage;
