import {configureStore} from '@reduxjs/toolkit';
import pathSlices from './slice';

const store = configureStore({
  reducer: {
    path: pathSlices,
  },
});
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export default store;
