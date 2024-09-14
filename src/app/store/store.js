import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './features/counterSlice';

// Тут просто створюємо store
export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});
