import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import axios from "axios";

const initialState = {
  loading: false,
  error: "",
  list: {},
};

export const fetchPokemons = createAsyncThunk(
  "listing/fetchPokemons",
  /**
   * Fetch Pokemons from API
   * Also used for Pagination
   *
   * @param {string} url
   */
  async (url) => {
    return axios.get(url).then(async ({ data }) => {
      const { results } = data;

      // fetch Details of all Pokemons on the page
      // Done like this because api returns only name & urls
      // no other details while pagination
      const allDetailsPromises = await Promise.allSettled(
        results.map(({ url }) => axios.get(url)),
      );
      const allDetails = await allDetailsPromises.map((res) => res.value.data);

      return { ...data, results: allDetails };
    });
  },
);

/**
 * Slice for Listing/List of Pokemons
 * Will be updated on pagination
 */
const ListingSlice = createSlice({
  name: "listing",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchPokemons.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchPokemons.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.list = payload;
      state.error = "";
    });
    builder.addCase(fetchPokemons.rejected, (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    });
  },
});

export default ListingSlice.reducer;
