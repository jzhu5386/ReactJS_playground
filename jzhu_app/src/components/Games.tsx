/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from "react";
const [square, setSquares] = useState(Array(9).fill(""));

// function Square() {
//   function handleClick() {
//     setSquares("X");
//   }
//   return (
//     <button className="square" onClick={handleClick}>
//       {square}
//     </button>
//   );
// }

// export default function Board() {
//   return (
//     <div className="game-box">
//       <div className="board-row">
//         <Square value={squares[0]} />
//         <Square value={squares[1]} />
//         <Square value={squares[2]} />
//       </div>
//       <div className="board-row">
//         <Square value={squares[3]} />
//         <Square value={squares[4]} />
//         <Square value={squares[5]} />
//       </div>
//       <div className="board-row">
//         <Square value={squares[6]} />
//         <Square value={squares[7]} />
//         <Square value={squares[8]} />
//       </div>
//     </div>
//   );
// }
