import React, {FC, useState} from 'react';
import { ITodo } from '../../types/types';
import {Checkbox, List} from "antd";
import Text from "antd/es/typography/Text";
import './TodoItem.css';

interface ITodoItem {
    todo: ITodo;
}

export const TodoItem: FC<ITodoItem> = ({ todo }) => {
    const [checked, setChecked] = useState<boolean>(todo.completed)
    const checkHandle = () => {
        setChecked(!checked);
    }

    return (
        <List.Item className="todo-text">
            <Checkbox className="todo-checkbox" checked={checked} onChange={checkHandle}/>
            <Text  type={checked ? 'success' : 'warning'}>{todo.title}</Text>
        </List.Item>
    )
};