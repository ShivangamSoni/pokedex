import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import axios from "axios";

const initialState = {
  loading: false,
  error: "",
  details: null,
};

export const fetchPokemon = createAsyncThunk(
  "active/fetchPokemon",
  /**
   * Fetch Pokemon Details from API
   * based on their name or Pokédex index number
   *
   * @param {string} nameOrNum
   */
  async (nameOrNum) => {
    return axios
      .get(`https://pokeapi.co/api/v2/pokemon/${nameOrNum}`)
      .then(async ({ data }) => data);
  },
);

/**
 * Slice for Active Pokemons' details
 */
const ActiveSlice = createSlice({
  name: "active",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchPokemon.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchPokemon.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.details = payload;
      state.error = "";
    });
    builder.addCase(fetchPokemon.rejected, (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    });
  },
});

export default ActiveSlice.reducer;
