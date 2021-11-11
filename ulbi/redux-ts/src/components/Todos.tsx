import React, { useEffect } from 'react';
import {useTypedSelector} from "../utils/hooks/useTypedSelector";
import {fetchTodos, setTodoPage} from "../store/action-creators/todos";
import { useDispatch } from 'react-redux';

export const Todos : React.FC = () => {
    const dispatch = useDispatch();
    const {todos, isLoadingTodos, errorTodos, page} = useTypedSelector(state => state.todos);

    useEffect(() => {
        dispatch(fetchTodos(page))
    }, [dispatch, page]);

    if (isLoadingTodos) {
        return <h2>Загружаем Todos...</h2>
    }

    if (errorTodos) {
        return <p>{errorTodos}</p>
    }

    const nextPageHandle = () => {
        dispatch(setTodoPage(page + 1));
    };

    const prevPageHandle = () => {
        if (page === 0) {
            return;
        }

        dispatch(setTodoPage(page - 1));
    };

    return (
        <div>
            <h1>{page}</h1>
            <button onClick={prevPageHandle}>-</button>
            <button onClick={nextPageHandle}>+</button>
            {todos.map((todo) => <p key={todo.id}>{todo.title}</p>)}
        </div>
    )
};
