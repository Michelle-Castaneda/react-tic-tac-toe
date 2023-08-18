import React from "react";

const Square = (props) => {
const handleClick = () => {
    if(!props.squareValue) {//the function checks if the value is falsy (has been clicked or not)
    if (props.player) {
        //if props.player is truthy, the first block of code will execute
        props.squares.splice(props.index,1, "X"); //updates the squares array, replaces the value at the position props.index with x
        //invoke the setSquares function from props passing the new squares array
        props.setSquares(props.squares); //setSquares, (setter function) from a useState hook in a React component, updates the state of the Tic Tac Toe board with the modified squares array.
        props.setPlayer(!props.player); //toggles the value of props.player between truthy and falsy values. If props.player is currently true, it will become false and vice versa.
       
            //If props.player is falsy, the second block  will execute
      }  else {
                props.squares.splice(props.index,1,"O")//updates the squares array, replaces the value at the position props.index with o
                props.setSquares(props.squares);
                props.setPlayer(!props.player);
            }
        }
    };
    
    return(
        <div className="square" onClick={handleClick}>
            {props.squareValue === "O" ? 
            <img src="https://cdn.discordapp.com/attachments/830137099042816080/984895322184634448/devcircle_1.png" alt= 'devmountain logo'></img>
           : props.squareValue }
        </div>
    )
}


export default Square;


// if there is no value, but the player state that is passed through props is true
// change the value of props.squares at props.index to “X”.
// invoke the setSquares function from props passing the new squares array, and toggle the value of props.player

// Otherwise change the value at props.index to “O”, 
//invoke props.setSquares with the new value of props.squares and toggle the value of props.player

//"Toggle" typically refers to switching between two states/conditions.