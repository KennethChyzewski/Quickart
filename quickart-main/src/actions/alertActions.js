import { SET_ALERT, REMOVE_ALERT } from '../constants';

export function setAlert(msg, alertType) {
    return dispatch => {
        const id = Math.random().toString(36).substring(2);
        dispatch({
            type: SET_ALERT,
            msg,
            alertType, 
            id
        })

        setTimeout(() => dispatch({
            type: REMOVE_ALERT,
            id
        }), 5000);
    };
}

// export function removeAlert(id) {
//     //return dispatch => {
//         dispatch({
//             type: REMOVE_ALERT,
//             id
//         })
//     };
// }