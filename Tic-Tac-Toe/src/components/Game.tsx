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
    if (
      squares[0][i] !== null &&
      squares[0][i] === squares[1][i] &&
      squares[1][i] === squares[2][i]
    ) {
      return squares[0][i];
    }
  }
  // Check diagonals
  if (
    squares[0][0] !== null &&
    squares[0][0] === squares[1][1] &&
    squares[1][1] === squares[2][2]
  ) {
    return squares[0][0];
  }
  if (
    squares[0][2] !== null &&
    squares[0][2] === squares[1][1] &&
    squares[1][1] === squares[2][0]
  ) {
    return squares[0][2];
  }
  // Check for draw
  console.log(squares);
  for (let i = 0; i < 3; i++) {
    if (squares[i].includes(null)) {
      return null;
    }
  }
  return "XY";
}

function Game() {
  const [turn, setTurn] = useState("X");
  const [squares, setSquares] = useState<(string | null)[][]>([
    [null, null, null],
    [null, null, null],
    [null, null, null],
  ]);
  const [winner, setWinner] = useState<string | null>(null);

  return (
    <div className="board-card">
      <h1>
        {winner == null
          ? "Next player: " + turn
          : winner === "XY"
          ? "Draw!"
          : "Winner: " + winner}
      </h1>
      <Board
        squares={squares}
        turn={turn}
        onChange={(squares) => {
          if (winner == null) {
            setSquares(squares);
            setWinner(CheckWinner(squares));
            setTurn(turn === "X" ? "O" : "X");
          }
        }}
      ></Board>
      <button
        className={"reset-button" + (winner == null ? " disabled" : "")}
        onClick={() => {
          if (winner != null) {
            setSquares([
              [null, null, null],
              [null, null, null],
              [null, null, null],
            ]);
            setTurn("X");
            setWinner(null);
          }
        }}
      >
        Reset
      </button>
    </div>
  );
}

export default Game;
