import logo from './logo.svg';
import './App.css';
import Square from './Square';
import { useState } from 'react';

function App(props) {
const [squares, setSquares] = useState(['', '', '','', '', '', '', '', '']); //parent component
const [player, setPlayer] = useState([true]);

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

      
      <div className='container'>
        {props.squares.map(() => (

        ))}

        {
          return {Square}
          squareValue=value argument,
          index=index
        }
        </div>

      return (
        <Square 
          squares={squares}
          player={player}
          setSquares={setSquares}
          setPlayer={setPlayer}
           />
        )
    </div>
  );
}

export default App;
