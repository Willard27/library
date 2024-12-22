import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "../../utils/http";

const initialState = {
  users: [],
  activeUser: [],
  theMostActiveUser: "",
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

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setTheMostActiveUser: (state, action) => {
      state.theMostActiveUser = action.payload;
    },
  },
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
        payload = payload.map((item) => [item.userName, item.action_count]);

        state.activeUser = payload;
        setTheMostActiveUser(payload[0]);
      });
  },
});

export const { setTheMostActiveUser } = userSlice.actions;

export const selectUsers = (state) => state.user.users;
export const selectTheMostActiveUser = (state) => state.user.theMostActiveUser;
export const selectActiveUser = (state) => state.user.activeUser;

export default userSlice.reducer;
