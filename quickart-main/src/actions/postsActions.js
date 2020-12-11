import {
  ALL_POSTS_LOADED,
  SINGLE_POST_LOADED,
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
      title: post.title,
      price: Number(post.price),
      category: post.category,
      date: post.postEndDate,
      description: post.description,
      pickUpOptions: post.pickUpOptions
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

export function likePost(post, jwbToken) {
  return dispatch => {
    // connection to Mongo DB and try to like the post
    // if we were able to successfully connect and like the post
    return fetch(`http://localhost:5000/posts/like/${post}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'x-auth-token': jwbToken,
      },
    })
      .then(response => response.json())
      .then(data => {
        console.log('Success:', data);
        dispatch({
          type: LIKE_POST_SUCCESS,
          msg: 'likePost PUT happened',
          post,
        });
      });

    // if any of the catches trigger, meaning connection or update failed
    // dispatch({
    //   type: LIKE_POST_FAILED,
    //   msg: 'likePost PUT happened'
    // })
  };
}

export function dislikePost(post, jwbToken) {
  return dispatch => {
    // connection to Mongo DB and try to dislike the post
    // if we were able to successfully connect and dislike the post
    return fetch(`http://localhost:5000/posts/dislike/${post}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'x-auth-token': jwbToken,
      },
    })
    .then(response => response.json())
    .then(data => {
      console.log('Success:', data);
      dispatch({
        type: DISLIKE_POST_SUCCESS,
        msg: 'dislikePost PUT happened',
        post,
      });
    });
    // if any of the catches trigger, meaning connection or update failed
    // dispatch({
    //   type: DISLIKE_POST_SUCCESS,
    //   msg: 'dislikePost PUT happened'
    // })
  };
}

export function loadOnePosts(postID, jwbToken) {
  return dispatch => {
    // connection to Mongo DB and try to get all posts
    // if we were able to successfully connect and get all posts
    return fetch(`http://localhost:5000/posts/${postID}`, {
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
          type: SINGLE_POST_LOADED,
          msg: 'loadONEPosts GET happened',
          data,
        });
      });
  };
}

export function deletePost(postID, jwbToken) {
  return dispatch => {
    // connection to Mongo DB and try to get all posts
    // if we were able to successfully connect and get all posts
    return fetch(`http://localhost:5000/posts/${postID}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'x-auth-token': jwbToken,
      },
    })
      .then(response => response.json())
      .then(data => {
        console.log('Success:', data);
        dispatch({
          type: SINGLE_POST_LOADED,
          msg: 'loadONEPosts GET happened',
          data,
        });
      });
  };
}

