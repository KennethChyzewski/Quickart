import React from 'react';
import { Link } from 'react-router-dom';
import userPicture from '../../images/defaultUserPicture.jpg';
import { connect } from 'react-redux';
import store from '../../store';
import './styles.css';
import { getUserReports } from '../../actions/reportsActions'

/* Component for the Main Posts Page */
class UserReportsPage extends React.Component {
  state = {
    user_posts: [],
  }
  isAdmin = ""

  componentDidMount(){
    this.loadData()
  }

  async loadData(){
    await this.props.getUserReports(localStorage.token)
    let reduxState = store.getState();
    //This check needs to be updated for admin.
    let userType = reduxState['loginState']['accType'];
    this.isAdmin = userType === "admin"
    
    this.setState({user_posts: reduxState['reportsState']})
    console.log(this.state)
  }

  render() {
    {console.log(this.state.user_posts)}
    
    const reportedPosts = this.state.user_posts.map(post => (
        <div className='post backgroundWhite'>
          <div className='lefttGridPost'>
            <Link to='/profile'>
              <img className='circleImgPosts' src={userPicture} alt='' />
              <h4 className='postUser'>{post.name}</h4>
            </Link>
          </div>
          <div className='rightGridPost'>
            <h4>{post.reason}</h4>
            <p className='smallMargin'>
              {post.reportDescription}
            </p>
            <Link to={{ pathname: '/DetailPosting/' + post.linkToPost}}
             className='btn btnDefault-report'>
              View Reported Posting
            </Link> 
          </div>
        </div>
      ));
    return (
      <section className='mainBackground'>
        <div className='containerPosts-report'>
          <h1 className='textDefaultColor'>All Reports</h1>
          <div className='allPosts'>
           {reportedPosts}
          </div>
        </div>
      </section>
    );
  }
}

export default connect(null, { getUserReports })(UserReportsPage);
