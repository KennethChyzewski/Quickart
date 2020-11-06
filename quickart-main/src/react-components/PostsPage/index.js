import React from 'react';
import { Link } from 'react-router-dom';
import userPicture from '../../images/defaultUserPicture.jpg';
import StickyBar from '../StickyBar';
import { connect } from 'react-redux';
import store from '../../store';
import './styles.css';

/* Component for the Main Posts Page */
class PostsPage extends React.Component {
  state = {
    otherReport: '',
    isReporting:false
  };

  onChangeEvent = e => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };
  open_close_report(){
    if(this.state.isReporting === false){
      this.setState({["isReporting"]: true})
      document.getElementById("reportFormContainer").style.display = "block";
    }else{
      this.setState({["isReporting"]: false})
      document.getElementById("reportFormContainer").style.display = "none";
    }
  }

  render() {
    const store_state = store.getState()
    let userType = store_state['loginState']['payload']["accType"]
    let isAdmin = userType === "admin"

    const adminDel = (
      <button type="button" className='btn btnDefault'>
        Delete Post
      </button>
    )
    const userReports = (
      <button id="userReportBtn" type="button" onClick= {this.open_close_report.bind(this)} className='btn btnDefault'>
        Report Post
      </button>
    )

    const reportForm = (
      <div className="formPopUp" id="reportFormContainer">
          <form>
              <h1>Report User</h1>
              <h4>Reason: </h4>
              <select id="reason">
                <option value="Fake Items">Fake Product</option>
                <option value="Illegal items">Illegal Items</option>
                <option value="Other">Other</option>
              </select>
              <input
                className='inputGroup'
                id='otherReport'
                type='text'
                placeholder='Report'
                onChange={this.onChangeEvent}>
              </input>
              <button type='submit' value='report' className='btn btnDefault'>
                Submit Report
              </button>
              <button type="button" className="btn btnDefault" onClick={this.open_close_report.bind(this)}>
                Close
              </button>
          </form>
      </div>
    )
    

    return (
      <section className='mainBackground'>
        <div className='containerPosts'>
          <StickyBar/>
          <h1 className='textDefaultColor'>Posts</h1>
          <div className='post-form'>
            <div className='backgroundDefault'>
              <h3>What would you like to sell?</h3>
            </div>
            <form className='form'>
              <textarea
                className='inputGroup'
                placeholder='Your message here'
              ></textarea>
              <input type='submit' value='Submit' className='btn btn' />
            </form>
            <div className='allPosts'>
              <div className='post backgroundWhite'>
                <div className='lefttGridPost'>
                  <Link to='/profile'>
                    <img className='circleImgPosts' src={userPicture} alt='' />
                    <h4>Johnson Smith</h4>
                  </Link>
                </div>
                <div className='rightGridPost'>
                  <p className='smallMargin'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                  <button className='btn'>
                    <span>Likes: 1</span>
                  </button>
                  <Link to='/DetailPosting' className='btn btnDefault'>
                    View
                  </Link>
                  {isAdmin ? adminDel:userReports}
                </div>

                {!isAdmin? reportForm: ""}

              </div>
            </div>
          </div>
        </div>
      </section>

      
    );
  }
}

export default connect(null)(PostsPage);
