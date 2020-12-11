import { REPORT_POST_SUCCESS, REPORT_POST_FAILED } from '../constants';

const initialState = [
    //We make the state a list so we can store a list of all alerts 
];

const reportsReducer = (state = initialState, action) => {
    
    switch(action.type) {
        case REPORT_POST_SUCCESS:
            console.log("Report Post Success");
            return action.data;

        case REPORT_POST_FAILED:
            console.log("Report Post Failed");
            // return [...state];
            return action.data;
  
        default:
            return state;
    }
};

export default reportsReducer;