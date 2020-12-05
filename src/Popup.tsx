import * as React from "react";
import { winnerType } from "./App";

interface popupType {
  winner: winnerType;
  newGameHandle: () => void;
}

const Popup: React.FC<popupType> = ({ winner, newGameHandle }) => {
  return (
    <div className="popupContainer">
      <div className="popup">
        <h2> {winner === "Tie" ? "Tie" : `The winner is ${winner}`} </h2>
        <button onClick={newGameHandle}> Play Again </button>
      </div>
    </div>
  );
};

export default Popup;
