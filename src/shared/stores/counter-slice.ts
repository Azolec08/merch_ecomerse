import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import type { CounterSlice } from '../types';

const initialState: CounterSlice = {
  counter: 0,
  name: '',
  isLoading: false,
  isVisible: true,
};

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: state => {
      state.counter += 1;
    },
    handleDecrement: (state, action: PayloadAction<number>) => {
      state.counter = action.payload;
    },
    setName: (state, action: PayloadAction<string>) => {
      state.name = action.payload;
    },
    toggleVisibility: state => {
      state.isVisible = !state.isVisible; // Toggle visibility
    },
    startLoading: state => {
      state.isLoading = true; // Set loading to true
    },
    stopLoading: state => {
      state.isLoading = false; // Set loading to false
    },
  },
});

export const { increment, handleDecrement, setName, toggleVisibility, startLoading, stopLoading } =
  counterSlice.actions;
export const counterReducer = counterSlice.reducer;
