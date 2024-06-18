import Square from "./Square";

interface Props {
  squares: (string | null)[];
  highlight?: number[];
  turn?: string;
  width?: number;
  onChange?: (squares: (string | null)[]) => void;
}

function Board({
  squares,
  turn = "",
  width = 300,
  highlight = [],
  onChange = () => {},
}: Props) {
  return (
    <div className="board" style={{ width: width + "px" }}>
      {[0, 1, 2].map((j) => (
        <div className="board-row" key={j}>
          {[0, 1, 2].map((k) => {
            const i = j * 3 + k;
            return (
              <Square
                key={i}
                highlight={highlight.includes(i)}
                value={squares[i]}
                textSize={(width / 3) * 0.7 + "px"}
                onClick={() => {
                  if (squares[i] == null) {
                    const newSquares = [...squares];
                    newSquares[i] = turn;
                    onChange(newSquares);
                  }
                }}
              ></Square>
            );
          })}
        </div>
      ))}
    </div>
  );
}

export default Board;
