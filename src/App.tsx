import React from 'react';
import {Weather} from "./components/weather";

const App: React.FC = () => {
  return (
    <div className="App">
      <h1>Hello World!</h1>
        <Weather />
    </div>
  );
}

export default App;
