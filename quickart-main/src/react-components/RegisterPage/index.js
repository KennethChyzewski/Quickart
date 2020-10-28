import React from 'react';

import "./styles.css";

/* Component for the RegisterPage */
class RegisterPage extends React.Component {

  render() {
    console.log(this.props)
    return (
      <div className='navBarPadding'>
        <h1 className='registerPage__h1-text'>RegisterPage</h1>
      </div>
    );
  }
}

export default RegisterPage;
