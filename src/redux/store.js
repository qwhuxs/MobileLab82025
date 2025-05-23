import { configureStore } from '@reduxjs/toolkit'
import { combineReducers } from 'redux'
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'
import AsyncStorage from '@react-native-async-storage/async-storage'

import cartReducer from './slices/cartSlice'
import productsReducer from './slices/productsSlice'
import userReducer from './slices/userSlice'
import ordersReducer from './slices/ordersSlice'

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['cart', 'user', 'orders'], 
};

const rootReducer = combineReducers({
  cart: cartReducer,
  products: productsReducer,
  user: userReducer,
  orders: ordersReducer,
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})

export const persistor = persistStore(store)
