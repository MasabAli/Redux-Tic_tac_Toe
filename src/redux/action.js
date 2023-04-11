import { createSlice } from "@reduxjs/toolkit";


const initialstate = {
    board: Array(9).fill(null),
    isWinner: false,
    player: "X",
    
    
};


export const gameslice = createSlice({
    name: "game",
    initialState: initialstate,
    reducers: {
        MakeMove: (state, action) => {
            state.board[ action.payload ] = state.player;
            state.player = state.player === 'X' ? 'O' : 'X';
        },


        checkWinner: (state, action) => {
            const winningLines = [
                [0, 1, 2],
                [3, 4, 5],
                [6, 7, 8],
                [0, 3, 6],
                [1, 4, 7],
                [2, 5, 8],
                [0, 4, 8],
                [2, 4, 6],
            ];
            for (let i = 0; i < winningLines.length; i++) {
                const [a, b, c] = winningLines[i];
                if (state.board[a] && state.board[a] === state.board[b] && state.board[a] === state.board[c]) {
                    state.isWinner = true;
                    return;
                }
            }
            state.isWinner = false;
        }
    },
});


    
export const { MakeMove, checkWinner } = gameslice.actions;
export const board = (state) => state.game.board;
export const player = (state) => state.game.player;

