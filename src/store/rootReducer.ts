import { combineReducers } from '@reduxjs/toolkit';
import { playerReducer } from 'store/modules/player';

export const rootReducer = combineReducers({
  players: playerReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
