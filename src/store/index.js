import { configureStore } from "@reduxjs/toolkit";
import bookReducer from "./slices/book";
import booklistReducer from "./slices/booklist";
import menuReducer from "./slices/menu";

export const store = configureStore({
  reducer: {
    book: bookReducer,
    booklist: booklistReducer,
    menu: menuReducer,
  },
});
