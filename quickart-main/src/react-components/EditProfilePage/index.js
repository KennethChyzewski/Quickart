
import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import store from '../../store';
import { connect } from 'react-redux';

import { updateProfile, getEditProfile } from '../../actions/settingsActions';
import { setAlert } from '../../actions/alertActions';

import './styles.css';

/* Component for the Edit User Profile's Page*/
class EditProfilePage extends React.Component {
  state = {
    user:"",
    name: "",
    email: "",
    password: "",
    location: "",
    biography: "",
    niche: "",
    tags: []
  };

  componentWillMount(){
    this.loadProfile()
  }

  async loadProfile() {
    let reduxState = store.getState()
    let userID = reduxState['loginState']['id']

    await this.props.getEditProfile(localStorage.token)
    reduxState = store.getState()
    this.setState(reduxState["settingsState"])

  }

  onChangeEvent = e => {
    this.state[e.target.id] = e.target.value
  };

  onSubmitEvent = async(e) => {
    e.preventDefault();
    if (!this.state.name){
      this.props.setAlert('A name is required.', 'error');
    } else if (!this.state.email) {
      this.props.setAlert('An email is required.', 'error');
    } else if (!this.state.password) {
      this.props.setAlert('A password is required.', 'error');
    } else if (!this.state.location){
      this.props.setAlert('A location is required.', 'error');
    } else if (!this.state.biography) {
      this.props.setAlert('A biography is required.', 'error');
    } else if (!this.state.niche){
      this.props.setAlert('A niche is required.', 'error');
    } else {
      await this.props.updateProfile(this.state, localStorage.token);
      const state = store.getState();

      //FIX THIS WITH AN ACTUAL CHECK
      const updateSuccess = true
      if (updateSuccess) {
        this.props.history.push('/posts');
      } else {
        this.props.setAlert(
          'Profile update failed. Please try again.',
          'error'
        );
      }
    }
  };

  render() {
    const niche = (
      <div className='form-group'>
        <textarea className='inputGroup' placeholder='Niche'></textarea>
      </div>
    )
    return (
      <section className='mainBackground-editProfile'>
        <div className='containerForm'>
          <h1 className='textDefaultColor-editProfile'>Edit Profile</h1>
          {/* <form className='form'> */}
          <form className='form' onSubmit={this.onSubmitEvent}>
            <label className='labelDefault'>Name</label>
            <div className='form-group'>
              <input 
                id='name'
                className='inputGroup'
                type='text' 
                placeholder={this.state.name}
                onChange={this.onChangeEvent} />
            </div>

            <label className='labelDefault'>Email Address</label>
            <div className='form-group'>
              <input
                id='email'
                className='inputGroup'
                type='email'
                placeholder={this.state.email}
                onChange={this.onChangeEvent}
              />
            </div>
            <label className='labelDefault'>Password</label>
            <div className='form-group'>
              <input
                id='password'
                className='inputGroup'
                type='password'
                placeholder={this.state.password}
                onChange={this.onChangeEvent}
              />
            </div>
            <label className='labelDefault'>Location</label>
            <div className='form-group'>
              <input
                id='location'
                className='inputGroup'
                type='text'
                placeholder={this.state.location}
                onChange={this.onChangeEvent}
              />
            </div>
            <label className='labelDefault'>Biography</label>
            <div className='form-group'>
              <textarea
                id='biography'
                className='inputGroup'
                placeholder={this.state.biography}
                onChange={this.onChangeEvent}
              ></textarea>
            </div>
            <label className='labelDefault'>Niche</label>
            <div className='form-group'>
              <textarea 
                id='niche'
                className='inputGroup'
                placeholder={this.state.niche}
                onChange={this.onChangeEvent}></textarea>
            </div>
            <label className='labelDefault'>Tags</label>
            <div className='form-group'>
              <textarea 
                id='tags'
                className='inputGroup'
                placeholder={this.state.tags}
                onChange={this.onChangeEvent}></textarea>
            </div>
            {/* <input
              type='submit'
              value='Submit'
              className='btn btnDefault-editProfile'
            /> */}
            <button
              type='submit'
              value='Submit'
              className='btn btnDefault'
            >
              Submit
            </button>
           
            {/* <input type='submit' value='Submit' className='btn btnDefault' /> */}
            <Link to='/' className='btn btnDefault'>
              Delete my Account
            </Link>
          </form>
        </div>
      </section>
    );
  }
}

//Map redux state to this components porps
// const mapStateToProps = state => ({
//   settings: state.settingsState
// })

export default withRouter(connect(null, { getEditProfile, updateProfile, setAlert })(EditProfilePage));
