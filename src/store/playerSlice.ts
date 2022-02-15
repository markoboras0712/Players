import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchPlayers, Player } from 'store';
import { AllPlayers } from 'store/Player';

const initialState: AllPlayers = {
  allPlayers: [],
  loading: false,
  error: '',
};

const playerSlice = createSlice({
  name: 'players',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchPlayers.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(
      fetchPlayers.fulfilled,
      (state, action: PayloadAction<Player[]>) => {
        state.loading = false;
        state.allPlayers = action.payload;
      },
    );
    builder.addCase(fetchPlayers.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
  },
});

export const playerReducer = playerSlice.reducer;
