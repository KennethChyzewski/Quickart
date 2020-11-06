import React from 'react';
import { Link } from 'react-router-dom';
import store from '../../store';
import { logout } from '../../actions/loginActions';
import { connect } from 'react-redux';

import './styles.css';

/* Component for the NavigationBar */
class NavigationBar extends React.Component {
  render() {
    const state = store.getState()
    let login = state['loginState']
    let isLoggedIn = (Object.keys(login).length !== 0) ? true : false;
  
    const notLoggedInNavBar = (
      <ul>
            <li id='navAbout'>
              <Link to='/about'>About</Link>
            </li> 
            <li id='navRegister'>
              <Link to='/register'>Sign Up</Link>
            </li>
            <li id='navLogin'>
              <Link to='/login'>Login</Link>
            </li>
      </ul>
    );

    const loggedInNavBar = (
      <ul>
            <li id='navPosts'>
              <Link to='/posts'>Posts</Link>
            </li>
            <li id='navProfile'>
              <Link to='/profile'>Profile</Link>
            </li>
            <li id='navMessages'>
              <Link to='/messages'>Messages</Link>
            </li>
            <li id='navLogout'>
              <Link onClick={this.props.logout} to='/'>Log Out</Link>
            </li>
      </ul>
    );


    const adminHome = (
      <Link to='/userReports'>
          <i className='fas fa-shopping-cart'></i> Quickart
      </Link>
    )
    const userHome = (
      <Link to='/posts'>
          <i className='fas fa-shopping-cart'></i> Quickart
      </Link>
    )
    const loginHome = (
      <Link to='/'>
          <i className='fas fa-shopping-cart'></i> Quickart
      </Link>
    )
    
    function redirector(){
      if(isLoggedIn){
        let userType = state['loginReducer']['payload']['accType'];
        let isAdmin = userType === "admin";
        return isAdmin ? adminHome : userHome
      }else{
        return loginHome
      }
    }
    
    return (
      <nav className='navbar backgroundBlue'>
        <h1>
          {redirector()}
        </h1>
        { isLoggedIn ? <div>{ loggedInNavBar }</div> : <div>{ notLoggedInNavBar }</div> }
      </nav>
    );
  }
}

const mapStateToProps = state => ({
  login: state.loginState
})

export default connect(mapStateToProps, { logout })(NavigationBar);
