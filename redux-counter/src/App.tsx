import React, { useReducer } from 'react';

const initialState = 0;

type StateT = {
    counter: number;
}

type DecrT = {
    type: "DECREMENT";
}

type IncrT = {
    type: "INCREMENT";
}

type ActionT = DecrT | IncrT;

const reducer = (state: StateT, action: ActionT): StateT => {
    switch (action.type) {
        case "INCREMENT":
            return { counter: state.counter + 1 };
        case "DECREMENT":
            return { counter: state.counter - 1 };
        default:
            return state;
    }
};

const [state, dispatch] = useReducer(reducer, initialState);

function App() {
    return (
        <div className="App">
            hello
        </div>
    );
}

export default App;
