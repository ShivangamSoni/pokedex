import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  id: null,
  details: null,
};

/**
 * Slice for Active Pokemons' details
 */
const ActiveSlice = createSlice({
  initialState,
  reducers: {},
});

export default ActiveSlice.reducer;
