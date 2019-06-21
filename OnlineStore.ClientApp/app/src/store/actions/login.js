import http from '../../utils/http';
//TODO: create actions and reducers for login page

export const loginStart = () => {
    return {
        type: "LOGIN_START",
        payload: {
            isLoading: true
        }
    }
}

export const loginSuccess = (authToken) => {
    return {
        type: "LOGIN_SUCCESS",
        payload: {
            isLoading: false,
            authToken: authToken
        }
    }
}

export const loginFail = () => {
    return {
        type: "LOGIN_FAIL",
        payload: {
            isLoading: false,
        }
    }
}

export const login = (userNameOrEmail, password) => {
    return dispatch => {
        dispatch(loginStart())

        http.post('/account/login/',{
            userNameOrEmail: userNameOrEmail,
            password: password
        }).then(res => {
            dispatch(loginSuccess(res.data.authToken));
        }, res => {
            dispatch(loginFail(res.data));
        })
    }
}