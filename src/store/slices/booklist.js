import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "../../utils/http";

const initialState = {
  top_booklist: [
    {
      id: 1,
      src: "",
      name: "书名",
      author: "作者",
      brief_intro: "好书",
      rate: 10.0,
      tag: "都市",
    },
    {
      id: 2,
      src: "",
      name: "书名",
      author: "作者",
      brief_intro: "好书",
    },
    {
      id: 3,
      src: "",
      name: "书名",
      author: "作者",
      brief_intro: "好书",
    },
    {
      id: 4,
      src: "",
      name: "书名",
      author: "作者",
      brief_intro: "好书",
    },
    {
      id: 5,
      src: "",
      name: "书名",
      author: "作者",
      brief_intro: "好书",
    },
    {
      id: 6,
      src: "",
      name: "书名",
      author: "作者",
      brief_intro: "好书",
    },
  ],
};

export const findAll = createAsyncThunk(
  "booklist/get",
  async (state, action) => {
    const res = await axios.get("/user");
    console.log(res);
    return res;
  }
);

export const booklistSlice = createSlice({
  name: "booklist",
  initialState,
  reducers: {
    add_booklist: (state, action) => {},
  },
  extraReducers: (builder) => {
    builder.addCase(findAll.fulfilled, (state, res) => {});
  },
});

export const { add_booklist } = booklistSlice.actions;

export const selectTopBooklist = (state) => state.booklist.top_booklist;

export default booklistSlice.reducer;
