import React from 'react';
import { Link } from 'react-router-dom';
import userPicture from '../../images/defaultUserPicture.jpg';
import StickyBar from '../StickyBar';
import { connect } from 'react-redux';
import store from '../../store';
import './styles.css';

class ModalReportPage extends React.Component {
  state = {
    otherReport: '',
    isReporting:false
  }

  onChangeEvent = e => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };
  
  onSubmitEvent = e => {
    //Checks if any of the Register fields are empty
    if (!this.state.otherReport) {
      console.log('An answer is required.');
    }
  };

  open_close_report(){
    console.log("here")
    if(this.state.isReporting === false){
      this.setState({["isReporting"]: true})
      document.getElementById("reportFormContainer").style.display = "block";
    }else{
      this.setState({["isReporting"]: false})
      document.getElementById("reportFormContainer").style.display = "none";
    }
  }

  render() {
    return (
      <section>
          <div className="formPopUp" id="reportFormContainer">
            <div className=""> 
              <form onSubmit={this.onSubmitEvent()}>
                  <h2>Report User</h2>
                  <h4 className="h4Left">Reason: </h4>
                  <select id="reason" >
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
                  <button type='submit' value='report' className='btn btnDefault' disabled>
                    Submit Report
                  </button>
                  <button type="button" className="btn btnDefault" onClick={this.open_close_report.bind(this)}>
                    Close
                  </button>
              </form>
           </div>
        </div>
      </section>
    )
  }
}

export default ModalReportPage;

