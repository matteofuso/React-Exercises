import Square from "./Square";

interface Props {
  squares: (string | null)[][];
  turn: string;
  onChange: (squares: (string | null)[][]) => void;
}

function Board({ squares, turn, onChange }: Props) {
  return (
    <div className="board">
      {squares.map((row, i) => (
        <div className="board-row" key={i}>
          {row.map((cell, j) => (
            <Square
              key={i * 3 + j}
              value={cell}
              onClick={() => {
                if (squares[i][j] == null) {
                  const newSquares = squares.map((row) => [...row]);
                  newSquares[i][j] = turn;
                  onChange(newSquares);
                }
              }}
            ></Square>
          ))}
        </div>
      ))}
    </div>
  );
}

export default Board;
