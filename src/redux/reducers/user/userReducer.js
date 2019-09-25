import {SET_CURRENT_USER} from './type';


const userReducer = (state = {}, action) => {
    switch(action.type) {
        case SET_CURRENT_USER:
       
            return {
                ...state,
                currentUser: action.payload

            };
        default:
            return state;
    }
};

export default userReducer;