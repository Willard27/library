import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "../../utils/http";

const initialState = {
  topBooks: [],
  allBooks: [],
  addRow: "",
  findResult: [],
  theMostPopularBook: "",
  bookCount: 0,
};

export const findAll = createAsyncThunk(
  "booklist/get",
  async (state, action) => {
    const res = await axios.get("/booklist/all_books");
    // console.log("qqqqq", res);
    return res.data.data;
  },
);

export const findTop = createAsyncThunk(
  "booklist/top_books",
  async (state, action) => {
    const res = await axios.get("/booklist/top_books");
    return res.data.data;
  },
);

export const findByCondition = createAsyncThunk(
  "booklist/find_by_condition",
  async (req) => {
    const res = await axios.post("/booklist/find_by_condition", req);
    // console.log(req, res);
    return res.data.data;
  },
);

export const getBookCount = createAsyncThunk(
  "booklist/book_count",
  async () => {
    const res = await axios.get("/book/book_count");
    return res.data.data;
  },
);

export const booklistSlice = createSlice({
  name: "booklist",
  initialState,
  reducers: {
    setAddRow: (state, action) => {
      state.addRow = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(findAll.fulfilled, (state, res) => {
        const payload = res.payload;
        for (let i = 0; i < payload.length; i++) {
          payload[i] = {
            key: payload[i].ISBN,
            ...payload[i],
          };
        }

        state.allBooks = payload;
      })
      .addCase(findTop.fulfilled, (state, res) => {
        const payload = res.payload;
        state.theMostPopularBook = payload[0].bName;

        if (payload.length > 8) {
          state.topBooks = payload.slice(0, 8);
        } else {
          state.topBooks = payload;
        }
      })
      .addCase(findByCondition.fulfilled, (state, res) => {
        const payload = res.payload;
        for (let i = 0; i < payload.length; i++) {
          payload[i] = {
            key: payload[i].ISBN,
            ...payload[i],
          };
        }
        state.findResult = payload;
      })
      .addCase(getBookCount.fulfilled, (state, res) => {
        state.bookCount = res.payload;
      });
  },
});

export const { setAddRow } = booklistSlice.actions;

export const selectTopBooks = (state) => state.booklist.topBooks;

export const selectAllBooks = (state) => state.booklist.allBooks;

export const selectAddRow = (state) => state.booklist.addRow;

export const selectFindResult = (state) => state.booklist.findResult;

export const selectTheMostPopularBook = (state) =>
  state.booklist.theMostPopularBook;

export const selectBookCount = (state) => state.booklist.bookCount;

export default booklistSlice.reducer;
