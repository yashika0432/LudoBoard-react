import { useState } from "react";

export default function LudoBoard() {
  let [moves, setMoves] = useState({ blue: 0, yellow: 0, red: 0, green: 0 });

  let updateBlue = () => {
    setMoves((prevmoves) => {
      return { ...prevmoves, blue: moves.blue + 1 };
    });
  };
  let updateRed = () => {
    setMoves((prevmoves) => {
      return { ...prevmoves, red: moves.red + 1 };
    });
  };
  let updateYellow = () => {
    setMoves((prevmoves) => {
      return { ...prevmoves, yellow: moves.yellow + 1 };
    });
  };
  let updateGreen = () => {
    setMoves((prevmoves) => {
      return { ...prevmoves, green: moves.green + 1 };
    });
  };

  return (
    <div>
      <h1>Game Begins!</h1>
      <hr></hr>
      <div className="board">
        <div className="one">
          <p>Blue Moves ={moves.blue}</p>
          <button style={{ backgroundColor: "blue" }} onClick={updateBlue}>
            +1
          </button>
        </div>
        <div className="one">
          <p>Yellow Moves ={moves.yellow}</p>
          <button
            style={{ backgroundColor: "yellow", color: "black" }}
            onClick={updateYellow}
          >
            +1
          </button>
        </div>
        <div className="one">
          <p>Red Moves ={moves.red}</p>
          <button style={{ backgroundColor: "red" }} onClick={updateRed}>
            +1
          </button>
        </div>
        <div className="one">
          <p>Green Moves ={moves.green}</p>
          <button style={{ backgroundColor: "green" }} onClick={updateGreen}>
            +1
          </button>
        </div>
      </div>
    </div>
  );
}
