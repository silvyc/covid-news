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
        <img src="/img/icono-covid.png" className="App-logo" alt="logo" align='left'/>
        <Text className = "Titulo-Header">COVID NEWS</Text>
      </header>
    </div>
  );
}

export default App;
