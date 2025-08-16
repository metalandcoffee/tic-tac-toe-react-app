import { useState } from 'react';
import './Game.css';
import Board from '../Board/Board'

function Game() {
    const [history, setHistory] = useState([Array(9).fill(null)]);
    const [currentMove, setCurrentMove] = useState(0);
    const xIsNext = currentMove % 2 === 0;
    const currentSquares = history[currentMove];

    const handlePlay = (squares) => {
        const nextHistory = [...history.slice(0,currentMove + 1), squares];
        setHistory(nextHistory);
        setCurrentMove(nextHistory.length-1);
    };

    const jumpTo = (move) => {
        setCurrentMove(move);
    }

    const moves = history.map((squares, move) => {
        let desc;
        if ( move > 0 ) {
            desc = `Go to move #${move}`;
        } else {
            desc = 'Go to game start';
        }

        return <li key={move}>
            <button onClick={() => jumpTo(move)}>{ desc }</button>
        </li>
    });

    return <div className="game">
            <div className="game-board">
                <Board
                    xIsNext={xIsNext}
                    squares={currentSquares}
                    onPlay={handlePlay}
                />
            </div>
            <div className="game-info">{ moves }</div>
        </div>

}

export default Game;