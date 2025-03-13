import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedCategory: null,
};

const serviceSlice = createSlice({
  name: "service",
  initialState,
  reducers: {
    setSelectedCategory: (state, action) => {
      state.selectedCategory = action.payload;
    },
  },
});

export const { setSelectedCategory } = serviceSlice.actions;
export default serviceSlice.reducer;
