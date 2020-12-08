import { LOAD_MESSAGES_SUCCESS, SEND_MESSAGE_SUCCESS, SEND_MESSAGE_FAILED } from '../constants';

export function getMessages(author, recipient, jwbToken) {
    return dispatch => {
        // connection to Mongo DB and try to get all posts
        // if we were able to successfully connect and get all posts
        return fetch(`http://localhost:5000/messages/${author}/${recipient}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'x-auth-token': jwbToken
          }
        })
        .then(response => response.json())
        .then(data => {
          console.log('Success:', data);
          dispatch({
            type: LOAD_MESSAGES_SUCCESS,
            msg: 'getMessages GET happened',
            users: [author, recipient]
          })
        })
    };
  }

export function sendMessage(author, recipient, text, jwbToken) {
  return dispatch => {
    // connection to Mongo DB and try to create the post
    // if we were able to successfully connect and create the post
    return fetch(`http://localhost:5000/messages/${author}/${recipient}`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'x-auth-token': jwbToken
          }
        })
        .then(response => response.json())
        .then(data => {
          console.log('Success:', data);
          dispatch({
            type: SEND_MESSAGE_SUCCESS,
            msg: 'sendMessage POST happened',
            text
          })
        })
    // if any of the catches trigger, meaning connection or update failed
    // dispatch({
    //   type: SEND_MESSAGE_FAILED,
    //   msg: 'sendMessage POST happened'
    // })
  };
}
