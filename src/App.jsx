import './App.css'
import React from 'react';

// eslint-disable-next-line react/prop-types
function Square({value, handleSquareClick}){
  return <button className="square" onClick={handleSquareClick}>{value}</button>
}

function App() {
  
  const [square, setSquare] = React.useState(Array(9).fill(null))
  const [xIsNext, setXIsNext] = React.useState(true)

  function handleSquareClick(i){
    if(square[i]) return 
    const newSquare = square.slice()
    newSquare[i] = xIsNext ? "👧" : "👦"
    setXIsNext(!xIsNext)
    
    setSquare(newSquare)
    console.log(square)
  }

  return (
    <div className="board">
      <Square value={square[0]} handleSquareClick={() => handleSquareClick(0)}/>
      <Square value={square[1]} handleSquareClick={() => handleSquareClick(1)}/>
      <Square value={square[2]} handleSquareClick={() => handleSquareClick(2)}/>
      <Square value={square[3]} handleSquareClick={() => handleSquareClick(3)}/>
      <Square value={square[4]} handleSquareClick={() => handleSquareClick(4)}/>
      <Square value={square[5]} handleSquareClick={() => handleSquareClick(5)}/>
      <Square value={square[6]} handleSquareClick={() => handleSquareClick(6)}/>
      <Square value={square[7]} handleSquareClick={() => handleSquareClick(7)}/>
      <Square value={square[8]} handleSquareClick={() => handleSquareClick(8)}/>
    </div>
  )
}

export default App
