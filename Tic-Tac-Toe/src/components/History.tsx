import Board from "./Board";

interface Props {
  history: Match[];
  onClick: (matchIndex: number) => void;
}

export interface Match {
  winner: string;
  squares: (string | null)[];
}

function History({ history, onClick }: Props) {
  return (
    <div className="history-container">
      {history.map((match, i) => {
        const { winner, squares } = match;
        return (
          <div key={i} className="match-history" onClick={() => onClick(i)}>
            <p>{winner === "XY" ? "Draw": "Winner " + winner}</p>
            <Board
              width={50}
              squares={squares}
            ></Board>
          </div>
        );
      })}
    </div>
  );
}

export default History;
