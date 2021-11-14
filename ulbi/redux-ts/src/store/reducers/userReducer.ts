import {UserActionT, UserActionTypes, UserStateI} from "../../types/user";


const initialState : UserStateI = {
    users: [],
    isLoading: false,
    error: null
};

export const authReducer = (state = initialState, action: UserActionT): UserStateI => {
    switch (action.type) {
        case UserActionTypes.FETCH_USERS:
            return {isLoading: true, error: null, users: []}
        case UserActionTypes.FETCH_USERS_SUCCESS:
            return {isLoading: false, error: null, users: action.payload}
        case UserActionTypes.FETCH_USERS_ERROR:
            return {isLoading: false, error: action.payload, users: []}
        default:
            return state;
    }
};

