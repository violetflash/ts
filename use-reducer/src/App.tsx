import React, { useReducer } from 'react';
import logo from './logo.svg';
import './App.css';

interface State {
    count: number;
}

const increment = (): Action => ({ type: "increment"})
const decrement = (): Action => ({ type: "decrement"})

type Action = { type: "increment" } | { type: "decrement" };

function App() {

    const reducer = (state: State, action: Action) => {
        switch (action.type) {
            case "increment":
                return { count: state.count + 1 };
            case "decrement":
                return { count: state.count - 1 };
            default:
                throw new Error();
        }
    };

    const [state, dispatch] = useReducer(reducer, { count: 0 });

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <div>
                    <p>{state.count}</p>
                    <button onClick={() => dispatch(decrement())}>-</button>
                    <button onClick={() => dispatch(increment())}>+</button>
                </div>
            </header>
        </div>
    );
}

export default App;
