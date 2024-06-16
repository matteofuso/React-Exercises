import { useState } from "react";
import Board from "./Board";

function CheckWinner(squares: (string | null)[][]) {
  // Check rows
  squares.forEach((row) => {
    if (row[0] !== null && row[0] === row[1] && row[1] === row[2]) {
      return row[0];
    }
  });
  // Check columns
  for (let i = 0; i < 3; i++) {
    if (squares[0][i] !== null && squares[0][i] === squares[1][i] && squares[1][i] === squares[2][i]) {
      return squares[0][i];
    }
  }
  // Check diagonals
  if (squares[0][0] !== null && squares[0][0] === squares[1][1] && squares[1][1] === squares[2][2]) {
    return squares[0][0];
  }
  if (squares[0][2] !== null && squares[0][2] === squares[1][1] && squares[1][1] === squares[2][0]) {
    return squares[0][2];
  }
  return null;
}

function Game() {
  const [turn, setTurn] = useState("X");
  let [squares, setSquares] = useState<(string | null)[][]>([
    [null, null, null],
    [null, null, null],
    [null, null, null],
  ]);
  const [winner, setWinner] = useState<string | null>(null);

  return (
    <div>
      <h1>{winner && "Ha vinto " + winner}</h1>
      <h1>{!winner && "Turno di " + turn}</h1>
      <Board
        squares={squares}
        turn={turn}
        onChange={(squares) => {
          if (winner == null){
            console.log(winner);
            setSquares(squares);
            setWinner(CheckWinner(squares));
            setTurn(turn === "X" ? "O" : "X");
          }
        }}
      ></Board>
    </div>
  );
}

export default Game;
