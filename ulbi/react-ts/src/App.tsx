import React, {useEffect, useState} from 'react';
import 'antd/dist/antd.css';
import {Card, UserList} from "./components";
import {IUser} from './types/types';
import axios from 'axios';

function App() {
    //Чтобы сразу определить тип, который должен быть внутри состояния - указываем дженерик - массив, содержащий
    // элементы с типом IUser
    const [users, setUsers] = useState<IUser[]>([]);
    const [error, setError] = useState<string | null>(null);
    console.log(users);

    useEffect(() => {
        const getUsers = async ()  => {
            try {
                const result = await axios.get("https://jsonplaceholder.typicode.com/users");
                const data = await result.data;
                setUsers(data);
            } catch(e) {
                setError('Ошибка получения списка пользователей...');
            }

        };

        getUsers();
    }, [])

    return (
        <div className="App">
            <Card width="300px" height="300px" background="purple" variant="primary"
                  onClick={(num) => console.log('click', num)}>
                <button>Button</button>
            </Card>
            {error && <h1>{error}</h1>}
            {!error && <UserList users={users}/>}
        </div>
    );
}

export default App;
