import { FC } from 'react';
import { ITodo, idType } from '../types/data';
import {TodoItem} from "./TodoItem";

interface ITodoListProps {
    items: Array<ITodo>;
    toggleTodo: (id: idType) => void;
    removeTodo: (id: idType) => void;
}


export const TodoList: FC<ITodoListProps> = (props) => {
    const { removeTodo, toggleTodo } = props;
    const list = props.items.map(item => (
        <TodoItem
            key={item.id}
            {...item}
            toggleTodo={toggleTodo}
            removeTodo={removeTodo}
        />
    ));

    return (
        <ul>
            {list}
        </ul>
    )
};
