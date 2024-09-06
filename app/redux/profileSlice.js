// app/redux/profileSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  name: '',
  age: '',
};

const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    updateProfile: (state, action) => {
      state.name = action.payload.name;
      state.age = action.payload.age;
    },
  },
});

export const { updateProfile } = profileSlice.actions;
export default profileSlice.reducer;
