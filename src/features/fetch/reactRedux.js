import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import initialState from './initialState';

export const getWeather = createAsyncThunk('get/getWeather', async (data, thunkApi) => {
  try {
    const response = await axios(`https://api.timezonesdb.com/v2.1/list-time-zone?key=${import.meta.env.VITE_API_KEY}&format=json`);

    return response.data;
  } catch (err) {
    const message = err.message;
    return thunkApi.rejectWithValue(message);
  }
});

const fetchSlice = createSlice({
  name: 'fetch',
  initialState,

  extraReducers: (builder) => {
    builder
      .addCase(getWeather.pending, (state) => {
        state.loading = true;
      })
      .addCase(getWeather.fulfilled, (state, action) => {
        state.weatherList = action.payload;
        state.loading = false;
      })
      .addCase(getWeather.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
      });
  },
});

export const { start, success, failed } = fetchSlice.actions;

export const selectData = (state) => state.fetch;

export default fetchSlice.reducer;
