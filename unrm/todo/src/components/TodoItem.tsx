import { FC } from 'react';
import { ITodo, idType } from '../types/data';

interface ITodoItemProps extends ITodo {
    toggleTodo: (id: idType) => void;
    removeTodo: (id: idType) => void;
}

export const TodoItem: FC<ITodoItemProps> = (props) => {
    const { id, title, completed, removeTodo, toggleTodo } = props;

    return (
        <li>
            <input type="checkbox" checked={completed} onChange={() => toggleTodo(id)}/>
            <span>{title}</span>
            <button onClick={() => removeTodo(id)}>X</button>
        </li>
    );
};
