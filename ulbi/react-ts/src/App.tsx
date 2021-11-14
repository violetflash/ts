import React, {useEffect, useState} from 'react';
import 'antd/dist/antd.css';
import {Card, List, UserItem} from "./components";
import {ITodo, IUser} from './types/types';
import axios from 'axios';
import {TodoItem} from "./components/TodoItem/TodoItem";
import {EventsExample} from "./components/EventsExample/EventsExample";
import {DragBlocks} from "./components/DragBlocks/DragBlocks";

function App() {
    //Чтобы сразу определить тип, который должен быть внутри состояния - указываем дженерик - массив, содержащий
    // элементы с типом IUser
    const [users, setUsers] = useState<IUser[]>([]);
    const [todos, setTodos] = useState<ITodo[]>([]);
    const [errorUser, setErrorUser] = useState<string | null>(null);
    const [errorTodo, setErrorTodo] = useState<string | null>(null);

    useEffect(() => {
        const getUsers = async ()  => {
            try {
                const result = await axios.get<IUser[]>("https://jsonplaceholder.typicode.com/users");
                const data = await result.data;
                setUsers(data);
            } catch(e) {
                setErrorUser('Ошибка получения списка пользователей...');
            }

        };

        const getTodo = async ()  => {
            try {
                const result = await axios.get<ITodo[]>("https://jsonplaceholder.typicode.com/todos");
                const data = await result.data.filter((_, i) => i < 10);
                setTodos(data);
            } catch(e) {
                setErrorTodo('Ошибка получения списка Todo...');
            }
        };

        getUsers();
        getTodo();
    }, [])

    return (
        <div className="App">
            <Card width="300px" height="300px" background="purple" variant="primary"
                  onClick={(num) => console.log('click', num)}>
                <button>Button</button>
            </Card>
            {errorUser && <h1>{errorUser}</h1>}
            {!errorUser &&
            <List
              items={users}
              renderItem={(user: IUser) => <UserItem user={user} key={user.id}/>}
            />}
            {errorTodo && <h1>{errorTodo}</h1>}
            {!errorTodo &&
            <List
                items={todos}
                renderItem={(todo: ITodo) => <TodoItem todo={todo} key={todo.id}/>}
            />}
            <EventsExample/>
            <DragBlocks/>
        </div>
    );
}

export default App;
