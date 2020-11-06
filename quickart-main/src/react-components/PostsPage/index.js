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
      <button type="button" className='btn btnDefault-posts'>
        Delete Post
      </button>
    )
    const userReports = (
      <button id="userReportBtn" type="button" onClick= {this.open_close_report.bind(this)} className='btn btnDefault-posts'>
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
        <div>
          <StickyBar />
        </div>
        <div className='containerPosts'>
          <h2 className='textDefaultColor-Posts'>All Posts</h2>
          <div className='post-form'>
            <div className='userCreateNewPost'>
              <div className='backgroundDefault'>
                <h3>Create New Post: What would you like to sell?</h3>
              </div>
              <form className='form'>
                <label className='labelDefault'>Title</label>
                <input
                  className='inputGroup-Posts'
                  type='Title'
                  placeholder='Title'
                />
                <label className='labelDefault'>Price</label>
                <input
                  className='inputGroup-Posts'
                  type='number'
                  placeholder='Price'
                />
                <label className='labelDefault'>Post End Date</label>
                <input className='inputGroup-Posts' type='date' />
                <label className='labelDefault'>Picture</label>
                <input className='inputGroup-Posts' type='file' />
                <label className='labelDefault'>Description</label>
                <textarea
                  className='inputGroup'
                  placeholder='Your message here'
                ></textarea>
                <input
                  type='submit'
                  value='Submit'
                  className='btn btnDefault-posts'
                />
              </form>
            </div>
            <div className='allPosts'>
              <div className='post backgroundWhite'>
                <div className='lefttGridPost'>
                  <Link to='/profile'>
                    <img className='circleImgPosts' src={userPicture} alt='' />
                    <h4 className='postUser'>Johnson Smith</h4>
                  </Link>
                </div>
                <div className='rightGridPost'>
                  <h3>Post Title 1</h3>
                  <h4>$1.67</h4>
                  <p className='smallMargin'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                  <button className='btn regularButton'>
                    <span>Likes: 2</span>
                  </button>
                  <Link to='/DetailPosting' className='btn btnDefault-posts'>
                    View
                  </Link>
                  {isAdmin ? adminDel:userReports}
                  {!isAdmin? reportForm: ""}
                </div>
              </div>
              <div className='post backgroundWhite'>
                <div className='lefttGridPost'>
                  <Link to='/profile'>
                    <img className='circleImgPosts' src={userPicture} alt='' />
                    <h4 className='postUser'>Johnson Smith</h4>
                  </Link>
                </div>
                <div className='rightGridPost'>
                  <h3>Post Title 2</h3>
                  <h4>$7.89</h4>
                  <p className='smallMargin'>
                    Doming dignissim vix ut, et virtute albucius eam, exerci
                    definitionem ne vim. Ea his dicat causae delectus. Ad option
                    accusam mnesarchum per, at tantas discere duo. Quo ut simul
                    laudem, choro dictas nam ex. Sit nobis homero percipit et.
                  </p>
                  <button className='btn regularButton'>
                    <span>Likes: 5</span>
                  </button>
                  <Link to='/DetailPosting' className='btn btnDefault-posts'>
                    View
                  </Link>
                  {isAdmin ? adminDel:userReports}
                  {!isAdmin? reportForm: ""}
                </div>
              </div>
              <div className='post backgroundWhite'>
                <div className='lefttGridPost'>
                  <Link to='/profile'>
                    <img className='circleImgPosts' src={userPicture} alt='' />
                    <h4 className='postUser'>Johnson Smith</h4>
                  </Link>
                </div>
                <div className='rightGridPost'>
                  <h3>Post Title 3</h3>
                  <h4>$15.87</h4>
                  <p className='smallMargin'>
                    Lorem ipsum dolor sit amet, usu no nostrud iracundia
                    efficiantur, ad vix iisque liberavisse. Et vivendum
                    moderatius vim. Id per voluptua voluptaria, nostro officiis
                    necessitatibus culm in. No mea meis paulo euismod. Nec ea
                    affert vidisse.
                  </p>
                  <button className='btn regularButton'>
                    <span>Likes: 6</span>
                  </button>
                  <Link to='/DetailPosting' className='btn btnDefault-posts'>
                    View
                  </Link>
                  {isAdmin ? adminDel:userReports}
                  {!isAdmin? reportForm: ""}
                </div>
              </div>
              <div className='post backgroundWhite'>
                <div className='lefttGridPost'>
                  <Link to='/profile'>
                    <img className='circleImgPosts' src={userPicture} alt='' />
                    <h4 className='postUser'>Johnson Smith</h4>
                  </Link>
                </div>
                <div className='rightGridPost'>
                  <h3>Post Title 4</h3>
                  <h4>$11.21</h4>
                  <p className='smallMargin'>
                    Mel et libris sensibus moderatius, et usu feugait
                    posidonium, ea quot ponderum temporibus pro. Sit option
                    assueverit cu, nominati gubergren suscipiantur ut nec. Sit
                    esse atqui diceret ad, pro scriptorem efficiantur ut.
                    Eleifend consequat vim ne, usu ne dolor albucius antiopam,
                    vis ea admodum detraxit disputando. An mei melius volutpat.
                    Ad insolens laboramus his, id agam dicunt nec.
                  </p>
                  <button className='btn regularButton'>
                    <span>Likes: 8</span>
                  </button>
                  <Link to='/DetailPosting' className='btn btnDefault-posts'>
                    View
                  </Link>
                  {isAdmin ? adminDel:userReports}
                  {!isAdmin? reportForm: ""}
                </div>
              </div>
              <div className='post backgroundWhite'>
                <div className='lefttGridPost'>
                  <Link to='/profile'>
                    <img className='circleImgPosts' src={userPicture} alt='' />
                    <h4 className='postUser'>Johnson Smith</h4>
                  </Link>
                </div>
                <div className='rightGridPost'>
                  <h3>Post Title 5</h3>
                  <h4>$5.78</h4>
                  <p className='smallMargin'>
                    Ius omnis eruditi perfecto id, vis ei porro animal voluptua,
                    causae euismod pericula et sit. Ex detracto quaerendum quo.
                    Mea duis malis ullamcorper ad. Usu stet fugit deserunt ea,
                    et autem nemore vel, ea tractatos concludaturque eam. Nam ne
                    quem impetus molestiae, pro atqui corpora urbanitas an.
                  </p>
                  <button className='btn regularButton'>
                    <span>Likes: 11</span>
                  </button>
                  <Link to='/DetailPosting' className='btn btnDefault-posts'>
                    View
                  </Link>
                  {isAdmin ? adminDel:userReports}
                  {!isAdmin? reportForm: ""}
                </div>
              </div>
              <div className='post backgroundWhite'>
                <div className='lefttGridPost'>
                  <Link to='/profile'>
                    <img className='circleImgPosts' src={userPicture} alt='' />
                    <h4 className='postUser'>Johnson Smith</h4>
                  </Link>
                </div>
                <div className='rightGridPost'>
                  <h3>Post Title 6</h3>
                  <h4>$2.36</h4>
                  <p className='postDetails smallMargin'>
                    Quodsi legendos facilisis at sit. Vel nostrum abhorreant
                    quaerendum ea, alterum gloriatur conceptam ei sea, vim ne
                    tation repudiare. Insolens oportere ex vis. Cum vidit
                    recusabo appellantur in, eu numquam ocurreret eum, has et
                    scripta abhorreant. Cu habeo nostrud duo, pro sanctus
                    meliore ponderum eu.
                  </p>

                  <button className='btn regularButton'>
                    <span>Likes: 16</span>
                  </button>
                  <Link to='/DetailPosting' className='btn btnDefault-posts'>
                    View
                  </Link>
                  {isAdmin ? adminDel:userReports}
                  {!isAdmin? reportForm: ""}
                </div>

                

              </div>
            </div>
          </div>
        </div>
      </section>

      
    );
  }
}

export default connect(null)(PostsPage);
