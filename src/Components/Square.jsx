// eslint-disable-next-line react/prop-types
function Square({value, handleSquareClick}){
    return( 
    <button 
        className="m-0 p-0 w-[38px] h-[38px] border-2 border-yellow-500 rounded-md" 
        onClick={handleSquareClick}
        >
        {value}
    </button>
    )
  }

export default Square;