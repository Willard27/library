import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "../../utils/http";

export const getRecords = createAsyncThunk("record/getRecord", async () => {
  const res = await axios.get("/record/all_records");
  return res.data.data;
}); // 1

const initialState = {
  records: [],
};

export const recordSlice = createSlice({
  name: "record",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // 2
    builder.addCase(getRecords.fulfilled, (state, action) => {
      const payload = action.payload;
      for (let i = 0; i < payload.length; i++) {
        payload[i] = {
          key: payload[i].rid,
          ...payload[i],
        };
      }
      state.records = payload;
    });
  },
});

export const selectCount = (state) => state.record.count;

export const selectRecords = (state) => state.record.records;
export default recordSlice.reducer;
