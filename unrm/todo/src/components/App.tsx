import { FC, useState, useEffect, useRef } from 'react';

import { TodoList } from './TodoList';

import { idType, ITodo } from '../types/data';

export const App: FC = () => {
    const [value, setValue] = useState('');
    const [todos, setTodos] = useState<Array<ITodo>>([]);

    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        inputRef.current?.focus();
    }, []);

    const addTodo = () => {
        if (!value) return;

        setTodos([...todos, {
            id: Date.now(),
            title: value,
            completed: false
        }]);

        setValue("");
    };

    const removeTodo = (id: idType): void => {
        setTodos(todos.filter(item => item.id !== id));
    };

    const toggleTodo = (id: idType): void => {
        setTodos(todos.map(item => {
            if (item.id === id) {
                return {...item, completed: !item.completed}
            }
            return item;
        }));
    };

    const handleKeyPress: React.KeyboardEventHandler<HTMLInputElement> = (e) => {
        if  (e.key !== 'Enter') return;

        addTodo();
    };

    const inputHandler: React.ChangeEventHandler<HTMLInputElement> = (e) => {
        setValue(e.target.value);
    };

    return (
        <div>
            <div>
                <input ref={inputRef} type="text" value={value} onChange={inputHandler} onKeyDown={handleKeyPress}/>
                <button onClick={addTodo}>Add</button>
            </div>
            <TodoList items={todos} removeTodo={removeTodo} toggleTodo={toggleTodo}/>
        </div>
    );
};
