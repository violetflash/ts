import {authActions, ISetAuth, ISetError, ISetIsLoading, ISetUser} from "./types";
import {IUser} from "../../../models/IUser";
import {AppDispatch} from "../../store/store";

import {userService} from "../../../api";

export const AuthActionCreators = {
    setUser: (user: IUser): ISetUser => ({
        type: authActions.SET_USER,
        payload: user
    }),
    setError: (payload: string): ISetError => ({
        type: authActions.SET_ERROR,
        payload
    }),
    setIsLoading: (payload: boolean): ISetIsLoading => ({
        type: authActions.SET_LOADING,
        payload
    }),
    setAuth: (payload: boolean): ISetAuth => ({
        type: authActions.SET_AUTH,
        payload
    }),
    login: (username: string, password: string) => async (dispatch: AppDispatch) => {
        try {
            dispatch(AuthActionCreators.setIsLoading(true));

            setTimeout(async () => {
                const response = await userService.getUsers();
                const mockUser = response.data.find(user => username === user.username && password === user.password);
                console.log(mockUser);

                if (!mockUser) {
                    dispatch(AuthActionCreators.setError('Такой пользователь не зарегистрирован'));
                    return;
                }

                dispatch(AuthActionCreators.setUser(mockUser));
                dispatch(AuthActionCreators.setAuth(true));
                dispatch(AuthActionCreators.setIsLoading(false));

                localStorage.setItem('auth', 'true');
                localStorage.setItem('user', mockUser.username);
            }, 1000)

        } catch (e) {
            dispatch(AuthActionCreators.setError("Ошибка при аутентификации"));
        }
    },
    logout: () => async (dispatch: AppDispatch) => {
        try {
            localStorage.removeItem('auth');
            localStorage.removeItem('user');
            dispatch(AuthActionCreators.setAuth(false));
            dispatch(AuthActionCreators.setUser({} as IUser));
        } catch (e) {

        }
    }
};
