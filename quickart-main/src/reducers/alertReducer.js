import { SET_ALERT, REMOVE_ALERT } from '../constants';

const initialState = [
    //We make the state a list so we can store a list of all alerts 
];

const alertReducer = (state = initialState, action) => {

    //Destructure 'action'
    const { type, payload } = action;   
    
    switch(type) {
        case SET_ALERT:
            return [...state, payload];

        case REMOVE_ALERT:
            return state.filter(alert => alert.id !== payload);
  
        default:
            return state;
    }
};

export default alertReducer;