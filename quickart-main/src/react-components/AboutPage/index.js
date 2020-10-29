import React from 'react';

import './styles.css';

/* Component for the About Page */
class AboutPage extends React.Component {
  render() {
    return (
      <section className='welcomePage'>
        <div className='transparentFilter'>
          <div className='welcomePageTextBlock'>
            <h1 className='largeText'>What is Quickart?</h1>
            <p className='mediumText'>
              Quickart is a website created to help support your local economy!
              Browse posts created by independent farmers and growers that
              features a wide variety of organic vegetables and fruits.
            </p>
          </div>
        </div>
      </section>
    );
  }
}

export default AboutPage;
