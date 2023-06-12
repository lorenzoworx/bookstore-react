import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  categories: [],
};

export const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    getStatus: () => 'Under Construction',
  },
});

export const { getStatus } = categoriesSlice.actions;
export default categoriesSlice.reducer;
