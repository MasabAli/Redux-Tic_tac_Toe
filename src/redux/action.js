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
    },
});


    
export const { MakeMove } = gameslice.actions;
export const board = (state) => state.game.board;
export const isWinner = (state) => state.game.isWinner;

