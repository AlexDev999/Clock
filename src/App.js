import React from 'react';
import logo from './logo.svg';
import './App.css';
import Clock from "./component/Welcome";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Clock/>
      </header>
    </div>
  );
}
setInterval(App,1000)
export default App;
