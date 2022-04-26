import { configureStore } from '@reduxjs/toolkit';
import { contactApi } from './contacts';
import { setupListeners } from '@reduxjs/toolkit/dist/query';
import { itemsReducer, filterSlice } from './../redux/itemsSlice';

export const store = configureStore({
  reducer: {
    items: itemsReducer,
    filter: filterSlice.reducer,
    [contactApi.reducerPath]: contactApi.reducer,
  },
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware(),
    contactApi.middleware,
  ],
});

setupListeners(store.dispatch);
