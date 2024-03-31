import React, {useState} from 'react';
// import logo from './logo.svg';
import './App.css';
import { Header } from './components/Header';

export const App = () => {
  const [counter, setCounter] = useState(0);
  const now = new Date();

  return (
    <div className="App">
      <Header />
      <main>

      </main>
      
        <button onClick={() => setCounter(i => i + 1)}>test {counter}</button>
        <span>Current time: {now.toLocaleTimeString()}</span>
        
    </div>
  );
}
