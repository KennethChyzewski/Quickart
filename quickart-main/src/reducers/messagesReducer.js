import { LOAD_MESSAGES_SUCCESS, SEND_MESSAGE_SUCCESS, SEND_MESSAGE_FAILED } from '../constants';

const initialState = [
    //We make the state a list so we can store a list of all alerts 
];

const messagesReducer = (state = initialState, action) => {

    //Destructure 'action'
    const { type, payload } = action;   
    
    switch(type) {

        case LOAD_MESSAGES_SUCCESS:
            console.log("Loaded Messages Success");
            // return [...state, payload];
            return action.data;

        case SEND_MESSAGE_SUCCESS:
            console.log("Send Message Success");
            // return [...state, payload];
            return action.data;

        case SEND_MESSAGE_FAILED:
            console.log("Send Message Failed");
            // return [...state, payload];
            return action.data;

        default:
            return state;
    }
};

export default messagesReducer;