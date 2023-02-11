import { configureStore } from '@reduxjs/toolkit';
import fetchReducer from '../features/fetch/reactRedux';

export default configureStore({
  reducer: {
    fetch: fetchReducer,
  },
});
