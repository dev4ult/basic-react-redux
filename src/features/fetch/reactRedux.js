import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import initialState from './initialState';

export const getWeather = createAsyncThunk('get/getWeather', async () => {
  return fetch(`https://api.timezonedb.com/v2.1/list-time-zone?key=${import.meta.env.VITE_API_KEY}&format=json`).then((res) => res.json());
});

const fetchSlice = createSlice({
  name: 'fetch',
  initialState,

  extraReducers: {
    [getWeather.pending]: (state) => {
      state.loading = true;
    },
    [getWeather.fulfilled]: (state, action) => {
      state.weatherList = action.payload;
      state.loading = false;
    },
    [getWeather.rejected]: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
  },
});

export const { start, success, failed } = fetchSlice.actions;

export const selectData = (state) => state.fetch;

export default fetchSlice.reducer;
