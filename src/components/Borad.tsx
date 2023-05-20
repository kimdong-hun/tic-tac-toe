interface BoardProps {
  xIsNext: boolean;
  squares: string[];
  onPlay(nextSquare: string[]): void;
}

const Board: React.FC<BoardProps> = ({ xIsNext, squares, onPlay }) => {
  const rows = Array(3).fill(null);
  const winner = calculateWinner(squares);
  let status;

  if (winner) {
    status = 'Winner: ' + winner;
  } else {
    status = 'Next player: ' + (xIsNext ? 'X' : 'O');
  }

  const handleClick = (i: number): void => {
    if (squares[i] || calculateWinner(squares)) {
      return;
    }

    const nextSquares = squares.slice();
    xIsNext ? (nextSquares[i] = 'X') : (nextSquares[i] = 'O');

    onPlay(nextSquares);
  };

  return (
    <div>
      <div className="status">{status}</div>
      <table>
        <tbody>
          {rows.map((_, row) => (
            <tr key={row}>
              {rows.map((_, col) => {
                const index = row * 3 + col;
                return (
                  <td key={col} className="squareBox">
                    <button
                      className="square"
                      onClick={() => handleClick(index)}
                    >
                      {squares[index]}
                    </button>
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const calculateWinner = (squares: string[]) => {
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
  return null;
};

export default Board;
