import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "../../utils/http";

const initialState = {
  menu: [],
  activeKey: "",
};

export const getMenu = createAsyncThunk(
  "menu/getMenu",
  async (state, action) => {
    const res = await axios.get("/user/menu");

    return res.data.data;
  },
);

export const menuSlice = createSlice({
  name: "menu",
  initialState,
  reducers: {
    setMenu(state, action) {
      const payload = action.payload;
      state.menu = payload;
    },
    setActiveKey(state, action) {
      const payload = action.payload;
      state.activeKey = payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getMenu.fulfilled, (state, res) => {
      state.menu = res.payload;
    });
  },
});

export const { setActiveKey } = menuSlice.actions;

export const selectMenu = (state) => state.menu.menu;

export const selectActiveKey = (state) => state.menu.activeKey;

export default menuSlice.reducer;
