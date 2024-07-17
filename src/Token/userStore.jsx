import { configureStore } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import store from 'redux-persist/lib/storage';
import { combineReducers } from '@reduxjs/toolkit'; // Replace with your actual slice
import userSlice from './userSlice';
const persistConfig = {
  key: 'root',
  storage,
  version: 1.0,
};
const rootReducer = combineReducers({
  user: userSlice,
  // Add other reducers here
});
const persistReducers = persistReducer(persistConfig, rootReducer);
export const Store = configureStore({
  reducer: persistReducers,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // to ignore non-serializable actions
    }),
});
export const persistor = persistStore(Store);
