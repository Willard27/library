import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "../../utils/http";

const initialState = {
  topBooks: [
    // {
    //   id: "471488171",
    //   src: "",
    //   name: "花不迷人人自迷",
    //   author: "拾贰",
    //   brief_intro: "往下坠落的瞬间，前尘往事涌入心头。",
    //   rate: 4.5,
    //   tag: "文艺",
    // },
    // {
    //   id: "57005668",
    //   src: "",
    //   name: "夜班便利店",
    //   author: "林二",
    //   brief_intro: "过期盒饭晚一点丢掉，就能喂饱一个失业小青年。",
    //   rate: 4.8,
    //   tag: "文艺",
    // },
    // {
    //   id: "2253386",
    //   src: "",
    //   name: "问后约",
    //   author: "细补",
    //   brief_intro: "关于孤单、梦想、被爱，十一篇细微疼痛的文字。",
    //   rate: 4.1,
    //   tag: "文艺",
    // },
    // {
    //   id: "116568252",
    //   src: "",
    //   name: "童年在乡村",
    //   author: "桔子树",
    //   brief_intro: "成长的岁月里，陈丽文经历了许多酸甜苦辣的事。",
    //   rate: 5,
    //   tag: "文艺",
    // },
    // {
    //   id: "",
    //   src: "",
    //   name: "长门",
    //   author: "邹近夫",
    //   brief_intro: "嫉妒心长在一个不求上进的人身上就像一个恶魔。",
    //   rate: 4.4,
    //   tag: "文艺",
    // },
    // {
    //   id: "11585567",
    //   src: "",
    //   name: "一切都是偶然",
    //   author: "兰思思",
    //   brief_intro: "推动婚姻延续下去的究竟是爱、勇气还是习惯？",
    //   rate: 4.6,
    //   tag: "文艺",
    // },
    // {
    //   id: "34161836",
    //   src: "",
    //   name: "野心时代",
    //   author: "徐归",
    //   brief_intro: "当英雄被歌颂完了，我们不妨歌颂猴子吧。",
    //   rate: 4.8,
    //   tag: "文艺",
    // },
    // {
    //   id: "54481980",
    //   src: "",
    //   name: "聚德里三十六号",
    //   author: "韩天航",
    //   brief_intro: "老北平有“裕泰茶馆”，旧上海有“聚德里”。",
    //   rate: 4.7,
    //   tag: "时代记忆",
    // },
  ],
  allBooks: [],
  addRow: "",
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

export const booklistSlice = createSlice({
  name: "booklist",
  initialState,
  reducers: {
    add_booklist: (state, action) => {},
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
        for (let i = 0; i < payload.length; i++) {
          payload[i] = {
            key: payload[i].ISBN,
            ...payload[i],
          };
        }
        if (payload.length > 8) {
          state.topBooks = payload.slice(0, 8);
        } else {
          state.topBooks = payload;
        }
      });
  },
});

export const { add_booklist, setAddRow } = booklistSlice.actions;

export const selectTopBooks = (state) => state.booklist.topBooks;

export const selectAllBooks = (state) => state.booklist.allBooks;

export const selectAddRow = (state) => state.booklist.addRow;

export default booklistSlice.reducer;
