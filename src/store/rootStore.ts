import { configureStore } from '@reduxjs/toolkit';

import { timeApi } from '~/store/apis/timeApi';
import { counterSliceReducer } from '~/store/slices/counter';

export const rootStore = configureStore({
  reducer: {
    counter: counterSliceReducer,
    [timeApi.reducerPath]: timeApi.reducer,
  },
  middleware: (getDefaultMiddleware) => [...getDefaultMiddleware(), timeApi.middleware],
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof rootStore.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof rootStore.dispatch;
