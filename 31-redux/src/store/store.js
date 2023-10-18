import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counterSlice';
import isVisibleReducer from './isVisibleSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    isVisible: isVisibleReducer,
  },
});
