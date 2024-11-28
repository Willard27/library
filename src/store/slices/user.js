import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  list: ["user1", "user2"],
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
});
