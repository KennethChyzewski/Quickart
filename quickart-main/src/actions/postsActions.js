import { CREATE_POST_SUCCESS, CREATE_POST_FAILED, LIKE_POST_SUCCESS, LIKE_POST_FAILED, DISLIKE_POST_SUCCESS,  DISLIKE_POST_FAILED } from '../constants';

export function createPost(post) {
  return dispatch => {
    // connection to Mongo DB and try to create the post
    // if we were able to successfully connect and create the post
    dispatch({
      type: CREATE_POST_SUCCESS,
      msg: 'createPost POST happened',
      post
    })
    // if any of the catches trigger, meaning connection or update failed
    // dispatch({
    //   type: CREATE_POST_FAILED,
    //   msg: 'createPost POST happened'
    // })
  };
}

export function likePost(post) {
  return dispatch => {
    // connection to Mongo DB and try to like the post
    // if we were able to successfully connect and like the post
    dispatch({
      type: LIKE_POST_SUCCESS,
      msg: 'likePost POST happened',
      post
    })
    // if any of the catches trigger, meaning connection or update failed
    // dispatch({
    //   type: LIKE_POST_FAILED,
    //   msg: 'likePost POST happened'
    // })
  };
}

export function dislikePost(post) {
    return dispatch => {
      // connection to Mongo DB and try to dislike the post
      // if we were able to successfully connect and dislike the post
      dispatch({
        type: DISLIKE_POST_SUCCESS,
        msg: 'dislikePost POST happened',
        post
      })
      // if any of the catches trigger, meaning connection or update failed
      // dispatch({
      //   type: DISLIKE_POST_SUCCESS,
      //   msg: 'dislikePost POST happened'
      // })
    };
  }