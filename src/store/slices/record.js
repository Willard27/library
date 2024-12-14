import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  list: ["record1", "record2"],
  count: 1,
  top3: [],
};

export const recordSlice = createSlice({
  name: "record",
  initialState,
  reducers: {},
});

export const selectCount = (state) => state.record.count;
export default recordSlice.reducer;
