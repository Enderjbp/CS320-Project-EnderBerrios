
import {useEffect, useState} from 'react';
import {API_URL} from "./config";

function App() { 
  const [message, setMessage] = useState('');
  
  useEffect(()=>{
    const fetchMessage = async () => { 
      const response = await fetch (`${API_URL}/hello/personalized`, {
        method: 'POST', 
        headers: {
          'Content-Type': 'application/json', 
        },
        body: JSON.stringify({ first: 'Ensign', last: 'Student' })
      });
        const text = await response.text();
        setMessage(text);
    };
    fetchMessage();
  },[]);
  
  return (
    <div>
      <h1>Message from the backend:</h1>
      <p>{message}</p>
    </div>
  );
}

export default App;




/*HOLD CODE

import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
*/