import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  list: ["book1", "book2"],
  count: 1,
};

export const bookSlice = createSlice({
  name: "book",
  initialState,
  reducers: {
    redux_book_test: (state, action) => {
      state.count += action.payload.num;
    },
  },
});

export const { redux_book_test } = bookSlice.actions;

export const selectCount = (state) => state.book.count;
export default bookSlice.reducer;
