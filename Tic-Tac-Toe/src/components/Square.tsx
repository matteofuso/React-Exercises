interface Props {
  value?: string | null;
  highlight?: boolean;
  textSize: string;
  onClick: (e: React.MouseEvent) => void;
}

function Square({ value = "", textSize, highlight = false, onClick }: Props) {
  return (
    <div className="square" onClick={onClick} style={{ fontSize: textSize, color: highlight? "red": undefined}}>
      {value}
    </div>
  );
}

export default Square;
