import { REPORT_POST_SUCCESS, REPORT_POST_FAILED } from '../constants';

export function reportPost(post, jwbToken) {
    console.log("post: ", post)
    return dispatch => {
      const passing = JSON.stringify({
        reportDescription: post.reportDescription,
        reportedBy: post.user.id,
        name: post.name,
        reason: post.reason,
        linkToPost: post.postId, // the actual post that got reported
      });
      console.log("passing: ", passing)
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


