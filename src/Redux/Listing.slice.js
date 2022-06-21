import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  count: 0,
  next: "",
  prev: "",
  pokemons: [],
};

/**
 * Slice for Listing/List of Pokemons
 * Will be updated on pagination
 */
const ListingSlice = createSlice({
  initialState,
  reducers: {},
});

export default ListingSlice.reducer;
