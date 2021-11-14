import React, {useEffect} from 'react';
import {AppRouter} from "./components";
import { useActions } from './utils/hooks/useActions';
import {IUser} from "./models/IUser";


function App() {
    const {setUser, setAuth} = useActions();

    useEffect(() => {
        if (localStorage.getItem('auth')) {
            setAuth(true);
            setUser({username: localStorage.getItem('user')} as IUser)
        }
    }, [])

  return (
    <div className="App">
      <AppRouter/>
    </div>
  );
}

export default App;
