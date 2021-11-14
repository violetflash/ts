import { FC } from 'react';
import CSS from 'csstype';
import { ITodo, idType, ITodoItemStyle } from '../types/data';

interface ITodoItemProps extends ITodo {
    toggleTodo: (id: idType) => void;
    removeTodo: (id: idType) => void;
}

export const TodoItem: FC<ITodoItemProps> = (props) => {
    const { id, title, completed, removeTodo, toggleTodo } = props;

    const itemStyle: CSS.Properties = completed ? {textDecoration: "line-through"} : {textDecoration: "none"};

    return (
        <li>
            <input type="checkbox" checked={completed} onChange={() => toggleTodo(id)}/>
            <span style={itemStyle}>{title}</span>
            <button
                onClick={() => removeTodo(id)}
                style={{
                    margin: '0 0 0 10px',
                    background: 'transparent',
                    border: "none",
                    outline: "none",
                    color: "red"
                }}
            >X</button>
        </li>
    );
};
