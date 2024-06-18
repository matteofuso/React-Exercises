import Board from "./Board";

interface Props {
  history: Match[];
  onClick: (matchIndex: number) => void;
}

export interface Match {
  winCombination: number[];
  squares: (string | null)[];
}

function History({ history, onClick }: Props) {
  return (
    <div className="history-container">
      {history.map((match, i) => {
        const { winCombination, squares } = match;
        return (
          <div key={i} className="match-history" onClick={() => onClick(i)}>
            <p>{winCombination.length == 0 ? "Draw" : "Winner " + squares[winCombination[0]]}</p>
            <Board width={50} squares={squares} highlight={winCombination}></Board>
          </div>
        );
      })}
    </div>
  );
}

export default History;
