import {
  ALL_POSTS_LOADED,
  CREATE_POST_SUCCESS,
  CREATE_POST_FAILED,
  LIKE_POST_SUCCESS,
  LIKE_POST_FAILED,
  DISLIKE_POST_SUCCESS,
  DISLIKE_POST_FAILED,
} from '../constants';

export function loadAllPosts(jwbToken) {
  return dispatch => {
    // connection to Mongo DB and try to get all posts
    // if we were able to successfully connect and get all posts
    return fetch(`http://localhost:5000/posts`, {
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
          type: ALL_POSTS_LOADED,
          msg: 'loadAllPosts GET happened',
          data,
        });
      });
  };
}

export function createPost(post, jwbToken) {
  return dispatch => {
    // connection to Mongo DB and try to create the post
    // if we were able to successfully connect and create the post
    const passing = JSON.stringify({
      postedBy: 'jdajdwjdwa',
      title: post.title,
      price: post.price,
      date: post.postEndDate,
      info: post.info,
      pickUpOptions: post.pickUpOptions,
    });
    return fetch(`http://localhost:5000/posts`, {
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
          type: CREATE_POST_SUCCESS,
          msg: 'createPost POST happened',
          post,
        });
      });

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
      post,
    });
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
      post,
    });
    // if any of the catches trigger, meaning connection or update failed
    // dispatch({
    //   type: DISLIKE_POST_SUCCESS,
    //   msg: 'dislikePost POST happened'
    // })
  };
}
