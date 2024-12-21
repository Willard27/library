import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "../../utils/http";

const initialState = {
  users: [],
};

export const getUsers = createAsyncThunk("user/getUsers", async () => {
  const res = await axios.get("/user/get_users");

  return res.data.data;
});

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getUsers.fulfilled, (state, action) => {
      const payload = action.payload;
      for (let i = 0; i < payload.length; i++) {
        payload[i] = {
          key: payload[i].uid,
          ...payload[i],
        };
      }

      state.users = payload;
    });
  },
});

// export const {} = userSlice.actions;

export const selectUsers = (state) => state.user.users;

export default userSlice.reducer;
