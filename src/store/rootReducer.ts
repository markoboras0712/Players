import { combineReducers } from '@reduxjs/toolkit';
import { playerReducer } from 'store/playerSlice';

const rootReducer = combineReducers({
  players: playerReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
