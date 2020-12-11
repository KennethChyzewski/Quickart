import { REPORT_POST_SUCCESS, REPORT_POST_FAILED, REPORT_GET_SUCCESS, REPORT_GET_FAILURE } from '../constants';

export function reportPost(post, jwbToken) {
    return dispatch => {
      const passing = JSON.stringify({
        date: null,
        reportDescription: post.reportDescription,
        reportedBy: post.user._id,
        name: post.name ,
        avatar: post.avatar,
        reason: post.reason,
        linkToPost: post.postId, // the actual post that got reported
      });
      return fetch(`http://localhost:5000/reports`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-auth-token': jwbToken,
        },
        body: passing,
      })
      .then(response => response.json())
      .then(data => {
        console.log('Success:', data);
        dispatch({
          type: REPORT_POST_SUCCESS,
          msg: 'reportsActions REPORT happened',
          data, // data is the whats returned to you from the server, this is what the redux state becomes
        });
      });
      
      // if any of the catches trigger, meaning connection or update failed
      // dispatch({
      //   type: REPORT_POST_FAILED,
      //   msg: 'reportsActions REPORT happened'
      // })
    };
}


export function getUserReports(jwbToken) {
    return dispatch => {
      return fetch(`http://localhost:5000/reports`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'x-auth-token': jwbToken,
        },
      })
      .then(response => response.json())
      .then(data => {
        console.log('Success:', data);
        dispatch({
          type: REPORT_GET_SUCCESS,
          msg: 'reportsActions GET happened',
          data, // data is the whats returned to you from the server, this is what the redux state becomes
        });
      });
    };
}


