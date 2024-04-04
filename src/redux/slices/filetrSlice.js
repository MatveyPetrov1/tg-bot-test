import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  searchValue: "",
  category: 0,
};

const searchSlice = createSlice({
  name: "searchSlice",
  initialState,
  reducers: {
    setSearchValue(state, action) {
      state.searchValue = action.payload;
    },
    setCategory(state, action) {
      state.category = action.payload;
    },
  },
});

export const { setSearchValue, setCategory } = searchSlice.actions;
export default searchSlice.reducer;
