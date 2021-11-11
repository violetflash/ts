import React from 'react';
import {Todos, UserList} from "./components";

function App() {
  return (
    <div className="App">
      <UserList/>
        <Todos/>
    </div>
  );
}

export default App;
