interface Props {
  value?: string | null;
  textSize: string;
  onClick: (e: React.MouseEvent) => void;
}

function Square({ value = "", textSize, onClick }: Props) {
  return (
    <div className="square" onClick={onClick} style={{ fontSize: textSize }}>
      {value}
    </div>
  );
}

export default Square;
