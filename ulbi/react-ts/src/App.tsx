import React from 'react';
import {Card} from "./components";

function App() {
  return (
    <div className="App">
        <Card width="300px" height="300px" background="purple" variant="outlined">
            <button>Button</button>
        </Card>
    </div>
  );
}

export default App;
