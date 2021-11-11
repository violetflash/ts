import axios from "axios";
import { Dispatch } from "redux";
import {TodoActionT, TodoActionTypes} from "../../types/todo";


export const fetchTodos = (page = 1, limit = 10) => {
    return async (dispatch : Dispatch<TodoActionT>) => {
        try {
            dispatch({type: TodoActionTypes.FETCH_TODO});
            const result = await axios.get('https://jsonplaceholder.typicode.com/todos/', {
                params: {
                    _page: page,
                    _limit: limit
                }
            });
            setTimeout(() => {
                dispatch({
                    type: TodoActionTypes.FETCH_TODO_SUCCESS,
                    payload: result.data
                });
            }, 500);

        } catch (err) {
            dispatch({
                type: TodoActionTypes.FETCH_TODO_ERROR,
                payload: "Произошла ошибка при загрузке Todos"
            });

        }
    }
};

export const setTodoPage = (page : number) => {
    return (dispatch: Dispatch<TodoActionT>) => {
        dispatch({
            type: TodoActionTypes.SET_TODO_PAGE,
            payload: page
        })
    }
};
