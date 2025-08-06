import React from 'react';
import Square from './components/Square/Square.jsx';
import './App.css';

function App() {
  return <>
    <div className="board-row">
      <Square />
      <Square />
      <Square />
    </div>
    <div className="board-row">
      <Square />
      <Square />
      <Square />
    </div>
    <div className="board-row">
      <Square />
      <Square />
      <Square />
    </div>
  </>
}

export default App;