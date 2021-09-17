import React from 'react';
import Card, { CardVariant } from "./components/Card";

function App() {
  return (
    <div>
        <Card onClick={() => console.log('click')} width={"200px"} height={"200px"} variant={CardVariant.outlined}>
            <button>Кнопка</button>
        </Card>
    </div>
  );
}

export default App;
