import { configureStore } from "@reduxjs/toolkit";
import recordReducer from "./slices/record";
import booklistReducer from "./slices/booklist";
import menuReducer from "./slices/menu";
import userReducer from "./slices/user";

export const store = configureStore({
  reducer: {
    record: recordReducer,
    booklist: booklistReducer,
    menu: menuReducer,
    user: userReducer,
  },
});
