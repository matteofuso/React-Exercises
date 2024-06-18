import { useState } from "react";
import Board from "./Board";
import History, { Match } from "./History";

function CheckWinCombination(squares: (string | null)[]) {
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
  let combo = [];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      combo.push(a, b, c);
    }
  }
  if (combo.length > 0) {
    return combo;
  }
  // if squares contain null
  if (squares.includes(null)) {
    return null;
  }
  return combo;
}

function Game() {
  const [turn, setTurn] = useState("X");
  const [squares, setSquares] = useState<(string | null)[]>(
    Array(9).fill(null)
  );
  const [winCombination, setWinCombination] = useState<number[] | null>(null);
  const [matchLog, setMatchLog] = useState<Match[]>([]);

  return (
    <div className="board-card">
      <h1>
        {winCombination == null
          ? "Next player: " + turn
          : winCombination.length === 0
          ? "Draw!"
          : "Winner: " + squares[winCombination[0]]}
      </h1>
      <Board
        squares={squares}
        turn={turn}
        highlight={winCombination || []}
        onChange={(squares) => {
          if (winCombination == null) {
            let winCombination = CheckWinCombination(squares);
            setSquares(squares);
            setTurn(turn === "X" ? "O" : "X");
            setWinCombination(winCombination);
            if (winCombination != null) {
              setMatchLog([
                ...matchLog,
                { winCombination: winCombination, squares: squares },
              ]);
            }
          }
        }}
      ></Board>
      <button
        className={"reset-button" + (winCombination == null ? " disabled" : "")}
        onClick={() => {
          if (winCombination != null) {
            setSquares(Array(9).fill(null));
            setTurn("X");
            setWinCombination(null);
          }
        }}
      >
        Reset
      </button>
      <History
        history={matchLog}
        onClick={(i) => {
          if (winCombination != null) {
            setSquares(matchLog[i].squares);
            setWinCombination(matchLog[i].winCombination);
          }
        }}
      ></History>
    </div>
  );
}

export default Game;
