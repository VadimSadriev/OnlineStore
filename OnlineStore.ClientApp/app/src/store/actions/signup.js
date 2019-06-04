import http from '../../utils/http';



export const signupStart = () => {
    return {
        type: "REGISTER_START"
    }
}

export const signupSuccess = () => {
    return {
        type: "REGISTER_SUCCESS"
    }
}

export const signupFail = (message) => {
    return {
        type: "REGISTER_FAIL",
        payload: {
            message
        }
    }
}

export const signup = (userName, email, password, confirmPassword) => {
    return dispatch => {
        dispatch(signupStart());

        http.post('/backendUrlForUserRegistration', {
            username: userName,
            email: email,
            password1: password,
            password2: confirmPassword
        }).then(res => {
            console.log(res);
            //stuff with  token
            dispatch(signupSuccess());
        }, res => {
            console.log(res);
            dispatch(signupFail(res.data));
        });
    }
}