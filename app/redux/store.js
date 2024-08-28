// app/redux/store.js
"use client"
import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counterSlice'; // Import your reducer
import authReducer from './authSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    auth: authReducer,
  },
});
