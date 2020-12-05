import * as React from "react";

export type cellValue = "" | "X" | "O";

interface cellProps {
  value: cellValue;
  onClick: () => void;
}

const Cell: React.FC<cellProps> = ({ value, onClick }) => {
  return (
    <div className="cell" onClick={() => onClick()}>
      {value}
    </div>
  );
};

export default Cell;
