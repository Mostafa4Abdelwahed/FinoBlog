import { configureStore } from '@reduxjs/toolkit'
import { articleSlice } from './ApiCalls/articleSlice'
import { categorySlice } from './ApiCalls/categorySlice'
import { pageSlice } from './ApiCalls/pageSlice'
import { contactSlice } from './ApiCalls/contactSlice'

export const store = configureStore({
  reducer: {
    [articleSlice.reducerPath]: articleSlice.reducer,
    [categorySlice.reducerPath]: categorySlice.reducer,
    [pageSlice.reducerPath]: pageSlice.reducer,
    [contactSlice.reducerPath]: contactSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware()
  .concat(articleSlice.middleware)
  .concat(categorySlice.middleware)
  .concat(pageSlice.middleware)
  .concat(contactSlice.middleware)
})