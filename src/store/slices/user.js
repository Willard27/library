import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "../../utils/http";

const initialState = {
  users: [],
  // activeUser: [],
  theMostActiveUser: "",
  userCount: 0,
};

export const getActiveUser = createAsyncThunk(
  "user/getActiveUser",
  async () => {
    const res = await axios.get("/user/active_users");

    return res.data.data;
  },
);

export const getUsers = createAsyncThunk("user/getUsers", async () => {
  const res = await axios.get("/user/get_users");

  return res.data.data;
});

export const getUserCount = createAsyncThunk("user/getUserCount", async () => {
  const res = await axios.get("/user/user_count");

  return res.data.data;
});

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getUsers.fulfilled, (state, action) => {
        const payload = action.payload;
        for (let i = 0; i < payload.length; i++) {
          payload[i] = {
            key: payload[i].uid,
            ...payload[i],
          };
        }

        state.users = payload;
      })
      .addCase(getActiveUser.fulfilled, (state, { payload }) => {
        // 把数据处理成元素为数组的数组
        // payload = payload.map((item) => [item.userName, item.action_count]);
        state.theMostActiveUser = payload.userName;
        // console.log("qqq", state.theMostActiveUser);
        state.activeUser = payload;
      })
      .addCase(getUserCount.fulfilled, (state, action) => {
        state.userCount = action.payload;
      });
  },
});

// export const {  } = userSlice.actions;

export const selectUsers = (state) => state.user.users;
export const selectTheMostActiveUser = (state) => state.user.theMostActiveUser;
// export const selectActiveUser = (state) => state.user.activeUser;
export const selectUserCount = (state) => state.user.userCount;

export default userSlice.reducer;
