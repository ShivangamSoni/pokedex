import { configureStore } from "@reduxjs/toolkit";

import ListingSlice from "./Listing.slice";
import ActiveSlice from "./Active.slice";

const { NODE_ENV } = process.env;

const store = configureStore({
  reducer: {
    listing: ListingSlice,
    active: ActiveSlice,
  },
  devTools: NODE_ENV === "development",
});

export default store;
