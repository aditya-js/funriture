import { createSlice, configureStore } from "@reduxjs/toolkit";

export const counter = createSlice({
  name: "counter",
  initialState: 0,
  reducers: {
    increment: (state) => state + 1,
  },
});

export const theme = createSlice({
  name: "theme",
  initialState: 0,
  reducers: {
    changeTheme: (state) => state === 0 ? 1 : 0,
  },
});

export const store = configureStore({
  reducer: {
    counter: counter.reducer,
    theme: theme.reducer,
  },
});
