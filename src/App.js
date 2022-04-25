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
    <div>
      <header className="App-header">
        <img src="/img/icono-covid.png" className="App-logo" alt="logo" align='left'/>
        <text className = "Titulo-Header" align='left'>COVID NEWS</text>
      </header>
    </div>
  );
}

export default App;
