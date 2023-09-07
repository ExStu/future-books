import { configureStore } from '@reduxjs/toolkit'

import { booksApi } from '../services/books.service'
import booksReducer from './reducers/books.slice'

export const store = configureStore({
  reducer: {
    books: booksReducer,
    [booksApi.reducerPath]: booksApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(booksApi.middleware),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch