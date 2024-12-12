import { configureStore } from "@reduxjs/toolkit";
import bookReducer from "./slices/book";
import booklistReducer from "./slices/booklist";

export const store = configureStore({
  reducer: {
    book: bookReducer,
    booklist: booklistReducer,
  },
});
