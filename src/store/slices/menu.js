import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "../../utils/http";

const initialState = {
  menu: [
    {
      label: "首页",
      key: "home",
      path: "/home",
    },
    {
      label: "搜索",
      key: "find",
      path: "/find",
    },
    {
      label: "图书",
      key: "books",
      path: "/books",
    },
    {
      label: "用户",
      key: "users",
      path: "/users",
    },
  ],
  activeKey: "",
};

export const getMenu = createAsyncThunk(
  "menu/get_menu",
  async (state, action) => {
    const res = await axios.get("/user/menu");
    return res.data;
  }
);

export const menuSlice = createSlice({
  name: "menu",
  initialState,
  reducers: {
    setActiveKey(state, action) {
      const payload = action.payload;
      state.activeKey = payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getMenu.fulfilled, (state, res) => {
      state.menu = res;
    });
  },
});

export const { setActiveKey } = menuSlice.actions;

export const selectMenu = (state) => state.menu.menu;

export const selectActiveKey = (state) => state.menu.activeKey;

export default menuSlice.reducer;
