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
        <img src="/img/COVID NEWS.png" className="App-logo" alt="logo" align='left'/>
        <img src="/img/Logo-UNINORTE.png" className ="Logo-Uninorte" alt="logo" align='right'/>
      </header>
    </div>
  );
}

export default App;
