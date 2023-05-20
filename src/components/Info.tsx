interface InfoProps {
  history: string[][];
  jumpTo(nextMove: number): void;
}

const Info: React.FC<InfoProps> = ({ history, jumpTo }) => {
  const moves = history.map((_, move) => {
    let description;

    if (move > 0) {
      description = 'Go to move #' + move;
    } else {
      description = 'Go to game start';
    }

    return (
      <li key={move}>
        <button className="move" onClick={() => jumpTo(move)}>
          {description}
        </button>
      </li>
    );
  });

  return <ol className="moves">{moves}</ol>;
};

export default Info;
