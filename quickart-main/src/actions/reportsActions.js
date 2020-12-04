import { REPORT_POST_SUCCESS, REPORT_POST_FAILED } from '../constants';

export function reportPost(post) {
    return dispatch => {
      // We need to check if the user logging in is a user or an admin
      //var accType = (credentials.username === ADMIN_ACCOUNT) ? "admin" : "user"
      // connection to Mongo DB and try to login the user
      // if we were able to successfully connect and login the user
      dispatch({
        type: REPORT_POST_SUCCESS,
        msg: 'reportsActions REPORT happened',
        post
      })
      // if any of the catches trigger, meaning connection or update failed
      // dispatch({
      //   type: REPORT_POST_FAILED,
      //   msg: 'reportsActions REPORT happened'
      // })
    };
}
