import { configureStore } from "@reduxjs/toolkit";
import { bookSlice } from "./slice/book";

export default configureStore({
  reducer: {
    book: bookSlice,
  },
});
