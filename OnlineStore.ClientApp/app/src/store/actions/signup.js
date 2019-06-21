import http from '../../utils/http';

export const signupStart = () => {
    return {
        type: "SIGNUP_START"
    }
}

export const signupSuccess = () => {
    return {
        type: "SIGNUP_SUCCESS"
    }
}

export const signupFail = (message) => {
    return {
        type: "SIGNUP_FAIL",
        payload: {
            message
        }
    }
}

export const signup = (userName, email, password, confirmPassword) => {
    return dispatch => {
        dispatch(signupStart());

        http.post('/account/signup/', {
            username: userName,
            email: email,
            password1: password,
            password2: confirmPassword
        }).then(res => {
            const data = JSON.parse(res.data);

            if (!data.success) {
                dispatch(signupFail(data.errors))
            }
            else {
                //stuff with  token
                dispatch(signupSuccess());
            }
        }, res => {
            dispatch(signupFail(res.data));
        })
    }
}