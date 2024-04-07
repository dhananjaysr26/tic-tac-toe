import React, { useCallback, useEffect, useState } from "react";
import Box from "./Box";

interface GameProps {}

const Game: React.FC<GameProps> = ({}) => {
  const [box, setBox] = useState({ values: Array(9).fill("null"), turn: true });
  const [message, setMessage] = useState("");

  const handleOnclickBox = useCallback((boxIndex: number) => {
    setBox((pre) => {
      if (!(pre.values[boxIndex] === "null")) return pre;
      const { values, turn } = pre;
      const newValue = [...values];
      newValue[boxIndex] = turn ? "X" : "O";
      return { values: newValue, turn: !turn };
    });
  }, []);

  useEffect(() => {
    if (box.values) {
      box.values.forEach((_, i) => {
        // row  check
        if (
          box.values[i] !== "null" &&
          i % 3 === 0 &&
          box.values[i] === box.values[i + 1] &&
          box.values[i + 1] === box.values[i + 2]
        ) {
          return setMessage(`${box.turn ? "O" : "X"} is Winner`);
        }
        // col check
        if (
          box.values[i] !== "null" &&
          i < 3 &&
          box.values[i] === box.values[i + 3] &&
          box.values[i + 3] === box.values[i + 6]
        ) {
          return setMessage(`${box.turn ? "O" : "X"} is Winner`);
        }
        // diagonal check
        if (
          box.values[i] !== "null" &&
          i === 0 &&
          box.values[i] === box.values[i + 4] &&
          box.values[i + 4] === box.values[i + 8]
        ) {
          return setMessage(`${box.turn ? "O" : "X"} is Winner`);
        }
        // diagonal check
        if (
          box.values[i] !== "null" &&
          i === 2 &&
          box.values[i] === box.values[i + 2] &&
          box.values[i + 2] === box.values[i + 4]
        ) {
          return setMessage(`${box.turn ? "O" : "X"} is Winner`);
        }
      });
    }
  }, [box]);
  console.log({ box });

  return (
    <div>
      <h2>{message}</h2>
      <div className="box-container">
        {box.values.map((value, index) => (
          <Box
            key={`box-${index}`}
            value={value}
            handleOnclick={() => handleOnclickBox(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Game;
