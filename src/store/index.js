import { configureStore } from "@reduxjs/toolkit";
import bookReducer from "./slices/book";

export const store = configureStore({
  reducer: {
    book: bookReducer,
  },
});
