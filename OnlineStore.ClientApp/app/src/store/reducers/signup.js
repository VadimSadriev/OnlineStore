
const initialState = {
    isLoading: false,
    message: null
}

const signupReducer = (state=initialState, action) => {
    switch(action.type){
        case "REGISTER_START": {
            return {
                ...state,
                isLoading: true
            };
        }
        case "REGISTER_SUCCESS": {
            return {
                ...state,
                isLoading: false
            };
        }
        case "REGISTER_FAIL": {
            return {
                ...state,
                isLoading: false
            };
        }
        default:
            return state;
    }
}

export default signupReducer;