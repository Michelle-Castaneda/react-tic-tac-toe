//import logo from './logo.svg';
import './App.css';
import Square from './Square';
import { useState } from 'react';

function App() {
const [squares, setSquares] = useState(['', '', '','', '', '', '', '', '']); //parent component
const [player, setPlayer] = useState([true]);

const handleClick = () => {
  setSquares(['', '', '','', '', '', '', '', '']);
  setPlayer(true); //invoke setPlayer passing a boolean of true
}

//create an array to know the pattern 
const lines = [
  [0,1,2],
  [3,4,5],
  [6,7,8],
  [0,3,6],
  [2,4,6],
  [1,4,7],
  [2,5,8]
]

const calculateWinner = (arr) => {
  for(let i = 0; i <lines.length; i++) {
    //when you destructure and array you can give it a key
    const [a,b,c] = lines[i]
    if(
      arr[a] &&
      arr[a] === arr[b] &&
      arr [a] === arr[c]
    ) return `${arr[a]} won the game`
    //console.log(arr[a],arr[b],arr[c])
  }
  return 'Who will win?'
}


  return (
    <div className="App">
      <span>{calculateWinner(squares)}</span>
      <div className='container'>
        {squares.map((value,index) => {
          return (<Square
            squares={squares}
            player={player}
            setSquares={setSquares}
            setPlayer={setPlayer}
            squareValue={value}
            key={index}
            index={index}
                   />
                   )
        })}
  </div>
<button onClick={handleClick}>Reset</button>
    </div>
  );
}

export default App;
