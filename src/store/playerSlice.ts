import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
  fetchPlayers,
  Player,
  sortArrayByKeyAscending,
  sortArrayByKeyDescending,
} from 'store';
import { AllPlayers } from 'store/Player';

const initialState: AllPlayers = {
  allPlayers: [],
  allPlayersFirstState: [],
  keyword: '',
  loading: false,
  error: '',
};

const playerSlice = createSlice({
  name: 'players',
  initialState,
  reducers: {
    addKeyword(state, action: PayloadAction<string>) {
      state.keyword = action.payload;
    },
    sortAscending(state) {
      state.allPlayers = state.allPlayers.sort(sortArrayByKeyAscending);
    },
    sortDescending(state) {
      state.allPlayers = state.allPlayers.sort(sortArrayByKeyDescending);
    },
    reset(state) {
      state.allPlayers = state.allPlayersFirstState;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchPlayers.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(
      fetchPlayers.fulfilled,
      (state, action: PayloadAction<Player[]>) => {
        state.loading = false;
        state.allPlayers = action.payload;
        state.allPlayersFirstState = action.payload;
      },
    );
    builder.addCase(fetchPlayers.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
  },
});

export const playerReducer = playerSlice.reducer;
export const { addKeyword, sortAscending, sortDescending, reset } =
  playerSlice.actions;
