import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import './styles.css';

class LoadingPage extends React.Component {
  componentDidMount() {
  	// Make sure that localStorage.previousPage is set before you do a this.props.history.push('/loading');
  	let path = localStorage.previousPage;
    	localStorage.removeItem('previousPage');
  	setTimeout(() => this.props.history.push(path), 1000);
  }

  render() {
    return (
      <section className='mainBackground'>
        <div className='center'>
          <h1 className='text'>Loading...</h1>
        </div>
      </section>
    );
  }
}

export default withRouter(connect(null, {})(LoadingPage));
