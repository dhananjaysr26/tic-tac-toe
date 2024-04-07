import React from "react";

interface BoxProps {
  value: string | null;
  handleOnclick: () => void;
}

const Box: React.FC<BoxProps> = ({ value, handleOnclick }) => {
  return (
    <button className="box" onClick={handleOnclick}>
      {value === "null" ? "" : value}
    </button>
  );
};

export default Box;
