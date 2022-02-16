import { createDraftSafeSelector } from '@reduxjs/toolkit';
import { RootState } from 'store/rootReducer';


export const playersSelector = (state: RootState) => state.players;

export const selectAllPlayers = createDraftSafeSelector(
  playersSelector,
  (players) => players.allPlayers,
);

export const selectKeyword = createDraftSafeSelector(
  playersSelector,
  (players) => players.keyword,
);
