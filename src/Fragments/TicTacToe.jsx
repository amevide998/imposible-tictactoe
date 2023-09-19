import React from 'react';
import Square from '../Components/Square';
import range from '../Utils/range';
import Stats from '../Components/Stats';
import calculateWin from '../Utils/calculateWin';

const TicTacToe = () => {
    const [square, setSquare] = React.useState(Array(9).fill(null))
    const [xIsNext, setXIsNext] = React.useState(true)
    const dimensions = range(0,8);
    const playerSymbol1 = "👧";
    const playerSymbol2 = "👦";

    const winner = calculateWin(square)
    const stat = winner ? `Win for ${winner}` : `turn ${xIsNext ? playerSymbol1 : playerSymbol2}`


    function handleSquareClick(i){
      if(winner) return 
      if(square[i]) return 
      const newSquare = square.slice()
      newSquare[i] = xIsNext ? playerSymbol1 : playerSymbol2
      setXIsNext(!xIsNext)
      setSquare(newSquare)
    }


  return (
    <>
      <div className="flex flex-wrap w-[120px] h-[120px] p-0 border-red-400 border-solid">
        {dimensions.map((i) => (
           <Square key={i} value={square[i]} handleSquareClick={() => handleSquareClick(i)}/>
        ))}
      </div>
      <Stats stats={stat}/>
    </>

  )
}

export default TicTacToe;