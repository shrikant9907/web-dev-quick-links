// redux/packagesSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = [
  { id: 1, name: 'React', description: 'A JavaScript library for building user interfaces.', },
  { id: 2, name: 'Redux', description: 'A predictable state container for JavaScript apps.', },
];

const packagesSlice = createSlice({
  name: 'packages',
  initialState,
  reducers: {
    // Add reducers for fetching, updating, and managing package data
  },
});

export const { actions, reducer } = packagesSlice;
export default packagesSlice.reducer;
