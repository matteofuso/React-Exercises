import { useState } from "react";
import Board from "./Board";
import History, { Match } from './History';

function CheckWinner(squares: (string | null)[]) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  // if squares contain null
  if (squares.includes(null)) {
    return null;
  }
  return "XY";
}

function Game() {
  const [turn, setTurn] = useState("X");
  const [squares, setSquares] = useState<(string | null)[]>(
    Array(9).fill(null)
  );
  const [winner, setWinner] = useState<string | null>(null);
  const [matchLog, setMatchLog] = useState<Match[]>([]);

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
            let winner = CheckWinner(squares);
            setSquares(squares);
            setTurn(turn === "X" ? "O" : "X");
            setWinner(winner);
            if (winner != null) {
              setMatchLog([...matchLog, { winner: winner, squares: squares }]);
            }
          }
        }}
      ></Board>
      <button
        className={"reset-button" + (winner == null ? " disabled" : "")}
        onClick={() => {
          if (winner != null) {
            setSquares(Array(9).fill(null));
            setTurn("X");
            setWinner(null);
          }
        }}
      >
        Reset
      </button>
      <History
        history={matchLog}
        onClick={(i) => {
          console.log(matchLog[i]);
        }}
      ></History>
    </div>
  );
}

export default Game;
