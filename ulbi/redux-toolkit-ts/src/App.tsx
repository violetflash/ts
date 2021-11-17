import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "./utils/hooks";
import {fetchUsers} from "./redux";
import {Pokemons} from "./components";

function App() {
    const dispatch = useAppDispatch();
    const {users, error, isLoading} = useAppSelector(state => state.user);

    useEffect(() => {
        dispatch(fetchUsers());
    }, [dispatch])

    if (error) {
        return <h1>{error}</h1>
    }

    if (isLoading) {
        return <h1>ЗАГРУЗКА...</h1>
    }

    return (
        <div className="App">
            <ul>
                {users && users.map(user => <li key={user.id}>{user.name}</li>)}
            </ul>
            <Pokemons/>
        </div>
    );
}

export default App;
