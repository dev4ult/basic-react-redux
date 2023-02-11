import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/fetch/counter.js';

export default configureStore({
  reducer: {
    counter: counterReducer,
  },
});
