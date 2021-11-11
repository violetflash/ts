import axios from "axios";
import {Dispatch} from "redux";
import {UserActionT, UserActionTypes} from "../../types/user";

export const fetchUsers = () => {
    return async (dispatch : Dispatch<UserActionT>) => {
        try {
            dispatch({ type: UserActionTypes.FETCH_USERS });
            const response = await axios.get('https://jsonplaceholder.typicode.com/users');
            dispatch({
                type: UserActionTypes.FETCH_USERS_SUCCESS,
                payload: response.data
            })
        } catch(e) {
            dispatch({
                type: UserActionTypes.FETCH_USERS_ERROR,
                payload: "Произошла ошибка при загрузке пользователей" })
        }
    }
};
