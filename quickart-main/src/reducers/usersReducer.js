import { GET_ALL_USERS_SUCCESS, GET_ALL_USERS_FAILED } from '../constants';

const initialState = [
    //We make the state a list so we can store a list of all alerts 
];

const usersReducer = (state = initialState, action) => {

    //Destructure 'action'
    const { type, payload } = action;   
    
    switch(type) {
        case GET_ALL_USERS_SUCCESS:
            console.log("Loaded All Users Success");
            return action.data;

        case GET_ALL_USERS_FAILED:
            console.log("Loaded All Users Failed");
            return action.data;

        default:
            return state;
    }
};

export default usersReducer;