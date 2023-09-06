import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import { testSlice } from '../reducers/darkMode';

export const store = configureStore({
  reducer: {
    darkMode: testSlice.reducer
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

/* eslint-disable @typescript-eslint/indent */
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
