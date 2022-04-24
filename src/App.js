import logo from './logo.svg';
import './App.css';
import { Button } from '@chakra-ui/react';
import { Text } from '@chakra-ui/react';
import {useState} from 'react';

function App() {
  const [cont,setCont] = useState(0);
  const incNum = ( ) => {
    setCont((prevState)=> prevState + 1);
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <h1 className="hola-mundo">Hola mundo</h1>
        <Text>{cont}</Text>
        <button onClick={incNum}>Click</button>
        
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
