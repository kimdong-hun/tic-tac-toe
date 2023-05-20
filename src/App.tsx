import { useState } from 'react';
import Board from './components/Borad';
import Info from './components/Info';

const App: React.FC = () => {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);
  const xIsNext = currentMove % 2 === 0;
  const currentSquares = history[currentMove];

  const handlePlay = (nextSquares: string[]): void => {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  };

  const jumpTo = (nextMove: number): void => {
    setCurrentMove(nextMove);
  };

  return (
    <div className="app">
      <div className="app-board">
        <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
      </div>
      <div className="app-info">
        <Info history={history} jumpTo={jumpTo} />
      </div>
    </div>
  );
};

export default App;
