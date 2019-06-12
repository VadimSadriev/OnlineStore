
const initialState = {
    isLoading: false,
    message: null
}

const signupReducer = (state=initialState, action) => {
    switch(action.type){
        case "SIGNUP_START": {
            return {
                ...state,
                isLoading: true,
                message: null
            };
        }
        case "SIGNUP_SUCCESS": {
            return {
                ...state,
                isLoading: false,
                message: 'success'
            };
        }
        case "SIGNUP_FAIL": {
            return {
                ...state,
                isLoading: false,
                message: action.payload.message
            };
        }
        default:
            return state;
    }
}

export default signupReducer;