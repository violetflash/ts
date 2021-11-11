import {TodoActionT, TodoActionTypes, TodoStateI } from "../../types/todo";


const initialState : TodoStateI = {
    todos: [],
    isLoadingTodos: false,
    errorTodos: null,
    page: 1,
    limit: 10
}

export const todoReducer = (state = initialState, action : TodoActionT) : TodoStateI => {
    switch (action.type) {
        case TodoActionTypes.FETCH_TODO:
            return {...state, isLoadingTodos: true};
        case TodoActionTypes.FETCH_TODO_SUCCESS:
            return {...state, todos: action.payload, isLoadingTodos: false}
        case TodoActionTypes.FETCH_TODO_ERROR:
            return {...state, errorTodos: action.payload}
        case TodoActionTypes.SET_TODO_PAGE:
            return {...state, page: action.payload}

        default: return state;
    }
};
