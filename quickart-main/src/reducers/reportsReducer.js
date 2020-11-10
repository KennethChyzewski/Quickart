import { REPORT_POST_SUCCESS, REPORT_POST_FAILED } from '../constants';

const initialState = [
    //We make the state a list so we can store a list of all alerts 
];

const reportsReducer = (state = initialState, action) => {

    //Destructure 'action'
    const { type, payload } = action;   
    
    switch(type) {
        case REPORT_POST_SUCCESS:
            console.log("Report Post Success");
            return [...state, payload];

        case REPORT_POST_FAILED:
            console.log("Report Post Failed");
            return [...state, payload];
  
        default:
            return state;
    }
};

export default reportsReducer;