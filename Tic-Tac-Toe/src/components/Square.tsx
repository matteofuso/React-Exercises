interface Props {
  value?: string | null;
  onClick: (e: React.MouseEvent) => void;
}

function Square({ value = "", onClick }: Props) {
  return (
    <div className="square" onClick={onClick}>
      {value}
    </div>
  );
}

export default Square;
