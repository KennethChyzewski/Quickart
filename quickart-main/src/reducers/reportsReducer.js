import { REPORT_POST_SUCCESS, REPORT_POST_FAILED, REPORT_GET_SUCCESS, REPORT_GET_FAILURE } from '../constants';

const initialState = [
    
];

const reportsReducer = (state = initialState, action) => {
    
    switch(action.type) {
        case REPORT_POST_SUCCESS:
            console.log("Report Post Success");
            return action.data;

        case REPORT_POST_FAILED: 
            console.log("Report Post Failed");
            return [...state];
            
        case REPORT_GET_SUCCESS:
            console.log("Report Get Post Success");
            return action.data;        

        case REPORT_GET_FAILURE:
            console.log("Report Get Post Failure");
            return [...state];

        default:
            return state;
    }
};

export default reportsReducer;