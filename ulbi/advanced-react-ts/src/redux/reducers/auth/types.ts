import {IUser} from "../../../models/IUser";

export interface IAuthState {
    isAuth: boolean;
    user: IUser;
    isLoading: boolean;
    error: string;
}

export enum authActions {
    SET_AUTH = "SET_AUTH",
    SET_ERROR = "SET_ERROR",
    SET_LOADING = "SET_LOADING",
    SET_USER = "SET_USER",
}

export interface ISetAuth {
    type: authActions.SET_AUTH;
    payload: boolean;
}

export interface ISetUser {
    type: authActions.SET_USER;
    payload: IUser
}

export interface ISetError {
    type: authActions.SET_ERROR;
    payload: string;
}

export interface ISetIsLoading {
    type: authActions.SET_LOADING;
    payload: boolean;
}

export type TAuhActions = ISetAuth | ISetError | ISetUser | ISetIsLoading;
