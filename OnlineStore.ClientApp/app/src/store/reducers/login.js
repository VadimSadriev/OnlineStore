
const initialState = {
    authToken: null,
    isLoading: false,
    message: null
}

const loginReducer = (state=initialState, action) => {
    switch(action.type){
        case "LOGIN_START":{
            return {
                ...state,
                isLoading: true,
            }
        }
        case "LOGIN_SUCCESS":{
            return {
                ...state,
                isLoading: false,
                authToken: action.payload.authToken
            }
        }
        case "LOGIN_FAIL": {
            return {
                ...state,
                isLoading: false,
            }
        }
        default:
            return false
    }
}

export default loginReducer;