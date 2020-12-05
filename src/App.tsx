import * as React from "react";
import Cell, { cellValue } from "./Cell";
import Popup from "./Popup";
import { callculateWinner } from "./helper";

import "./styles.css";

const { useState } = React;

export type winnerType = cellValue | "Tie";

const App = () => {
  const [board, setBoard] = useState<cellValue[]>(Array(9).fill(""));
  const [moveCount, setMoveCount] = useState<number>(0);
  const [winner, setWinner] = useState<winnerType>("");

  const getCellValue = (c: number): cellValue => (c % 2 ? "O" : "X");

  const handleClick = (i: number) => {
    if (board[i] || winner) return;
    const newBoard = [...board];
    newBoard[i] = getCellValue(moveCount);
    setBoard(newBoard);
    setMoveCount((prev) => prev + 1);
    const xo = callculateWinner(newBoard);
    setWinner(xo);
    if (!xo && newBoard.every((c) => c)) setWinner("Tie");
  };

  const newGameHandle = () => {
    setBoard(Array(9).fill(""));
    setMoveCount(0);
    setWinner("");
  };

  return (
    <div className="board">
      {board.map((cell, i) => (
        <Cell key={i} value={cell} onClick={() => handleClick(i)} />
      ))}
      {winner && <Popup winner={winner} newGameHandle={newGameHandle} />}
    </div>
  );
};

export default App;
