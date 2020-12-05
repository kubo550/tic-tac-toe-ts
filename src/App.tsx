import * as React from "react";
import Cell, { cellValue } from "./Cell";
import { callculateWinner } from "./helper";

import "./styles.css";

const { useState } = React;

const App = () => {
  const [board, setBoard] = useState(Array(9).fill(""));
  const [moveCount, setMoveCount] = useState(1);
  const [winner, setWinner] = useState("");

  const getCellValue = (c: number): cellValue => (c % 2 ? "X" : "O");

  const handleClick = (i: number) => {
    if (board[i] || winner) return;
    const newBoard = [...board];
    newBoard[i] = getCellValue(moveCount);
    setBoard(newBoard);
    setMoveCount((prev) => prev + 1);
    setWinner(callculateWinner(newBoard));
  };

  return (
    <div className="board">
      {board.map((cell, i) => (
        <Cell key={i} value={cell} onClick={() => handleClick(i)} />
      ))}
      {winner && <div className="popupContainer"> {winner} </div>}
    </div>
  );
};

export default App;
