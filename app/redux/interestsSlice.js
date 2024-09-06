// app/redux/interestsSlice.js
import { createSlice } from '@reduxjs/toolkit';

const interestsSlice = createSlice({
  name: 'interests',
  initialState: [],
  reducers: {
    addInterests: (state, action) => {
      return [...state, ...action.payload];
    },
  },
});

export const { addInterests } = interestsSlice.actions;
export default interestsSlice.reducer;