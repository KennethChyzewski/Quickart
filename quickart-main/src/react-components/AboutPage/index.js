import React from 'react';

import "./styles.css";

/* Component for the RegisterPage */
class AboutPage extends React.Component {
  
  render() {
    console.log(this.props)
    return (
      <div className='navBarPadding'>
        <h1 className='aboutPage__h1-text'>AboutPage</h1>
      </div>
    );
  }
}

export default AboutPage;
