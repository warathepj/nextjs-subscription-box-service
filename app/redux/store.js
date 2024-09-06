// app/redux/store.js
import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counterSlice';
import authReducer from './authSlice';
import profileReducer from './profileSlice';
import interestsReducer from './interestsSlice';
export const store = configureStore({
  reducer: {
    counter: counterReducer,
    auth: authReducer,
    profile: profileReducer,
    interests: interestsReducer
  },
});



// // app/redux/store.js
// "use client"
// import { configureStore } from '@reduxjs/toolkit';
// import counterReducer from './counterSlice'; // Import your reducer
// import authReducer from './authSlice';
// import profileReducer from './profileSlice';

// export const store = configureStore({
//   reducer: {
//     counter: counterReducer,
//     auth: authReducer,
//     profile: profileReducer,
//   },
// });
