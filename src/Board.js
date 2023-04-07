import React, { useEffect } from "react";
import "./Board.css";
import { useDispatch, useSelector } from "react-redux";
import { MakeMove } from "./redux/action";
import { board, isWinner } from "./redux/action";
const Board = () => {
    const board = useSelector((state) => state.board);
    const dispatch = useDispatch();
    const isWinner = useSelector((state) => state.isWinner);
    console.log(board);
    useEffect(() => {console.log(board)},[board]);
    return (
        <>
            <div className="board">
                {board.map((cell, index) => (
                    <div onClick={() => dispatch(MakeMove(index))} className="cell">{cell}</div>
                ))}
            </div>
        </>

    );
}

export default Board;