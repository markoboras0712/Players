import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AllPlayers } from 'store/Player';

const initialState: AllPlayers = {
  allPlayers: [],
  loading: false,
  error: '',
};

const playerSlice = createSlice({
  name: 'players',
  initialState,
  reducers: {
    addTodo(state, action) {
      state.allPlayers.push(action.payload);
    },
  },
});

export const playerReducer = playerSlice.reducer;
export const { addTodo } = playerSlice.actions;
