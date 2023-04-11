import React, { useEffect } from "react";
import "./Board.css";
import { useDispatch, useSelector } from "react-redux";
import { MakeMove, checkWinner} from "./redux/action";

const Board = () => {
    const board = useSelector((state) => state.board);
    const dispatch = useDispatch();
    const isWinner = useSelector((state) => state.isWinner);
    const player = useSelector((state) => state.player);
    useEffect(() => {
        dispatch(checkWinner());
    },[board]);
    return (
        <>
            <div className="board">
                {board.map((cell, index) => (
                    <div onClick={() => dispatch(MakeMove(index))} className="cell">{cell}</div>
                ))}
            </div>

            <div className="winner">
                {isWinner ? "You are the Winner" : `Player turn ${player}`}
            </div>


        </>

    );
}

export default Board;