
import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import store from '../../store';
import { connect } from 'react-redux';

import { updateProfile, getEditProfile, deleteUser } from '../../actions/settingsActions';
import { setAlert } from '../../actions/alertActions';

import './styles.css';
import { Category } from '@material-ui/icons';

/* Component for the Edit User Profile's Page*/
class EditProfilePage extends React.Component {
  state = {
    user:"",
    name: "",
    // email: "",
    // password: "",
    location: "",
    biography: "",
    niche: "",
    tags: []
  };

  componentDidMount(){
    this.loadProfile()
  }

  async loadProfile() {
    let reduxState = store.getState()
    await this.props.getEditProfile(localStorage.token)
    reduxState = store.getState()
    this.setState(reduxState["settingsState"])
  }

  onTagEvent = e => {
    let value = e.target.value
    if(this.state.tags.includes(value)){
      this.state.tags.splice(this.state.tags.indexOf(value),1)
    }else{
      this.state.tags.push(value)
      console.log(value)
      console.log(this.state)
    }
  }
  
  onDeleteButton = async(e) =>{
    e.preventDefault();
    await this.props.deleteUser(localStorage.token)
    window.location = '/'
  }

  onChangeEvent = e => {
    this.state[e.target.id] = e.target.value
  };

  onSubmitEvent = async(e) => {
    e.preventDefault();

      await this.props.updateProfile(this.state, localStorage.token);
      const state = store.getState();

      //FIX THIS WITH AN ACTUAL CHECK
      let updateSuccess =Object.keys(state['settingsState']).length !== 0 ? true : false;
      if (updateSuccess) {
        this.props.history.push('/profile');
      } else {
        this.props.setAlert(
          'Profile update failed. Please try again.',
          'error'
        );
      }
    // }
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
            {/* <label className='labelDefault'>Email Address</label>
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
                placeholder={'*******'}
                onChange={this.onChangeEvent}
              />
            </div> */}
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
            <div className='tagCheckBox'>
                <input type='checkbox' id="Fruit" value="Fruit" onChange={this.onTagEvent}></input>
                <label htmlFor="Fruit"> Fruit </label>
                <br></br>
                <input type='checkbox' id="Vegetables" value="Vegetables" onChange={this.onTagEvent}></input>
                <label htmlFor="Vegetables"> Vegetables </label>
                <br></br>
                <input type='checkbox' id="Meat" value="Meat" onChange={this.onTagEvent}></input>
                <label htmlFor="Meat"> Meat </label>
                <br></br>
                <input type='checkbox' id="Grain" value="Grain" onChange={this.onTagEvent}></input>
                <label for="Grain"> Grain </label>
                <br></br>
                <input type='checkbox' id="Other" value="Other" onChange={this.onTagEvent}></input>
                <label htmlFor="Other"> Other </label>
                <br></br>
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
            
            {this.isAdmin ? "" : 
              <button
                className='btn btnDefault'
                type='button'
                value="delete"
                onClick={this.onDeleteButton}
                >
                Delete My Account
              </button>
            }
            {/*<Link to='/' className='btn btnDefault'>
              Delete my Account
          </Link>*/}
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

export default withRouter(connect(null, { deleteUser, getEditProfile, updateProfile, setAlert })(EditProfilePage));
