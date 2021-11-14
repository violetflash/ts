import {authActions, IAuthState, TAuhActions} from "./types";
import {IUser} from "../../../models/IUser";

const initialState: IAuthState = {
    isAuth: false,
    user: {} as IUser,
    isLoading: false,
    error: ""
};

export const authReducer = (state = initialState, action: TAuhActions): IAuthState => {
    switch (action.type) {
        case authActions.SET_AUTH:
            return { ...state, isAuth: action.payload, isLoading: false };
        case authActions.SET_LOADING:
            return { ...state, isLoading: action.payload };
        case authActions.SET_USER:
            return { ...state, user: action.payload, isLoading: false, error: "" };
        case authActions.SET_ERROR:
            return { ...state, error: action.payload, isLoading: false };
        default:
            return state;
    }
};