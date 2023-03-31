import { createSlice } from '@reduxjs/toolkit';

import { initialState } from '~/store/slices/counter/constants';

// Define the initial state using that type

export const counterSlice = createSlice({
  name: 'counter',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
  },
});

export const { increment } = counterSlice.actions;

// Other code such as selectors can use the imported `RootState` type

export const counterSliceReducer = counterSlice.reducer;
