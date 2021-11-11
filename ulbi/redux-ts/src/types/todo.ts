export interface TodoStateI {
    todos: any[];
    isLoadingTodos: boolean;
    errorTodos: null | string;
    page: number;
    limit: number;
}

export enum TodoActionTypes {
    FETCH_TODO = "FETCH_TODO",
    FETCH_TODO_SUCCESS = "FETCH_TODO_SUCCESS",
    FETCH_TODO_ERROR = "FETCH_TODO_ERROR",
    SET_TODO_PAGE = "SET_TODO_PAGE"
}

interface FetchTodoActionI {
    type: TodoActionTypes.FETCH_TODO;
}

interface FetchTodoSuccessActionI {
    type: TodoActionTypes.FETCH_TODO_SUCCESS;
    payload: any[];
}

interface FetchTodoErrorActionI {
    type: TodoActionTypes.FETCH_TODO_ERROR;
    payload: string;
}

interface FetchTodoPageI {
    type: TodoActionTypes.SET_TODO_PAGE;
    payload: number;
}

export type TodoActionT = FetchTodoActionI | FetchTodoSuccessActionI | FetchTodoErrorActionI | FetchTodoPageI;
