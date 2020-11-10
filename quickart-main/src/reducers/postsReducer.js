import { CREATE_POST_SUCCESS, CREATE_POST_FAILED, LIKE_POST_SUCCESS, LIKE_POST_FAILED, DISLIKE_POST_SUCCESS,  DISLIKE_POST_FAILED } from '../constants';

const initialState = [
    //We make the state a list so we can store a list of all alerts 
];

const postsReducer = (state = initialState, action) => {

    //Destructure 'action'
    const { type, payload } = action;   
    
    switch(type) {
        case CREATE_POST_SUCCESS:
            console.log("Create Post Success");
            return [...state, payload];

        case CREATE_POST_FAILED:
            console.log("Create Post Failed");
            return [...state, payload];

        case LIKE_POST_SUCCESS:
            console.log("Like Post Success");
            return [...state, payload];

        case LIKE_POST_FAILED:
            console.log("Like Post Failed");
            return [...state, payload];

        case DISLIKE_POST_SUCCESS:
            console.log("Dislike Post Success");
            return [...state, payload];

        case DISLIKE_POST_FAILED:
            console.log("Dislike Post Failed");
            return [...state, payload];
  
        default:
            return state;
    }
};

export default postsReducer;