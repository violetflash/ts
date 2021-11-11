import React, { useEffect } from 'react';
import {useTypedSelector} from "../utils/hooks/useTypedSelector";
// import {fetchUsers} from "../store/action-creators/user";
import { useActions } from '../utils/hooks/useActions';

export const UserList: React.FC = props => {
    const {users, isLoading, error} = useTypedSelector(state => state.users);
    const {fetchUsers} = useActions();

    useEffect(() => {
        fetchUsers();
    }, []);

    if  (isLoading) {
        return <h1>Загрузка...</h1>
    }

    if (error) {
        return <p>{error}</p>
    }

    return (
        <div>
            {users.map((user) => <div key={user.id}>{user.name}</div>)}
        </div>
    )
};
