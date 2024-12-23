import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [board, setBoard] = useState(Array(9).fill(["", null]));
  const [turn, setTurn] = useState(0);
  const [winner, setWinner] = useState(null);

  useEffect(() => {
    checkForWinner(board);
  }, [turn]);

  function handlePress(location) {
    if (board[location][0] === "" && !winner) {
      if (turn % 2 === 0) {
        setBoard((currBoard) => {
          currBoard[location] = ["X", turn];
          return currBoard;
        });
      } else if (turn % 2 !== 0) {
        setBoard((currBoard) => {
          currBoard[location] = ["O", turn];
          return currBoard;
        });
      }
      checkCells();
      setTurn(turn + 1);
    }
  }

  function checkCells() {
    board.forEach((cell, index) => {
      if (cell[1] === turn - 6) {
        setBoard((currBoard) => {
          currBoard[index] = ["", null];
          return currBoard;
        });
      }
    });
  }

  function reset() {
    setBoard(Array(9).fill(["", null]));
    setTurn(0);
    setWinner(null);
  }

  function checkForWinner(board) {
    const winningCombinations = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let combination of winningCombinations) {
      const [a, b, c] = combination;
      if (
        board[a][0] &&
        board[a][0] === board[b][0] &&
        board[a][0] === board[c][0]
      ) {
        setWinner(board[a][0]);
      }
    }
  }

  return (
    <>
      {!winner ? (
        <h1 className="title">{turn % 2 === 0 ? "X's turn" : "O's turn"}</h1>
      ) : (
        <h1 className="title">{`${winner} wins`}</h1>
      )}
      <div className="tic-tac-toe-board">
        <div className="row">
          <div
            className={
              board[0][1] === turn - 6
                ? `${board[0][0]}squareLastTurn`
                : board[0][0] === ""
                ? "square"
                : `${board[0][0]}square`
            }
            onClick={() => {
              handlePress(0);
            }}
          >
            {board[0][0]}
          </div>
          <div
            className={
              board[1][1] === turn - 6
                ? `${board[1][0]}squareLastTurn`
                : board[1][0] === ""
                ? "square"
                : `${board[1][0]}square`
            }
            onClick={() => {
              handlePress(1);
            }}
          >
            {board[1][0]}
          </div>
          <div
            className={
              board[2][1] === turn - 6
                ? `${board[2][0]}squareLastTurn`
                : board[2][0] === ""
                ? "square"
                : `${board[2][0]}square`
            }
            onClick={() => {
              handlePress(2);
            }}
          >
            {board[2][0]}
          </div>
        </div>
        <div className="row">
          <div
            className={
              board[3][1] === turn - 6
                ? `${board[3][0]}squareLastTurn`
                : board[3][0] === ""
                ? "square"
                : `${board[3][0]}square`
            }
            onClick={() => {
              handlePress(3);
            }}
          >
            {board[3][0]}
          </div>
          <div
            className={
              board[4][1] === turn - 6
                ? `${board[4][0]}squareLastTurn`
                : board[4][0] === ""
                ? "square"
                : `${board[4][0]}square`
            }
            onClick={() => {
              handlePress(4);
            }}
          >
            {board[4][0]}
          </div>
          <div
            className={
              board[5][1] === turn - 6
                ? `${board[5][0]}squareLastTurn`
                : board[5][0] === ""
                ? "square"
                : `${board[5][0]}square`
            }
            onClick={() => {
              handlePress(5);
            }}
          >
            {board[5][0]}
          </div>
        </div>
        <div className="row">
          <div
            className={
              board[6][1] === turn - 6
                ? `${board[6][0]}squareLastTurn`
                : board[6][0] === ""
                ? "square"
                : `${board[6][0]}square`
            }
            onClick={() => {
              handlePress(6);
            }}
          >
            {board[6][0]}
          </div>
          <div
            className={
              board[7][1] === turn - 6
                ? `${board[7][0]}squareLastTurn`
                : board[7][0] === ""
                ? "square"
                : `${board[7][0]}square`
            }
            onClick={() => {
              handlePress(7);
            }}
          >
            {board[7][0]}
          </div>
          <div
            className={
              board[8][1] === turn - 6
                ? `${board[8][0]}squareLastTurn`
                : board[8][0] === ""
                ? "square"
                : `${board[8][0]}square`
            }
            onClick={() => {
              handlePress(8);
            }}
          >
            {board[8][0]}
          </div>
        </div>
      </div>
      <div className="reset">
        <button onClick={reset}>Reset</button>
      </div>
    </>
  );
}

export default App;
