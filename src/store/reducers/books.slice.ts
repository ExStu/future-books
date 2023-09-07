import { createSlice } from '@reduxjs/toolkit'
import { CategoryEnum } from '../../const/categories'
import { SortingEnum } from '../../const/sort'
import { clearDuplicates } from '@/src/utils/clearDuplicates'
import { IBookState } from './books.interface'

const initialState: IBookState = {
  startIndex: 0,
  skip: true,
  query: '',
  totalItems: 0,
  books: [],
  category: CategoryEnum.ALL,
  sorting: SortingEnum.RELEVANCE,
  isLoading: false
}

export const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    updateQueryAndResetIndex: (state, action) => {
      state.skip = false // запускаем query
      state.startIndex = 0
      state.query = action.payload
    },
    enableSkip: (state) => {
      state.skip = true
    },
    incrementStartIndex: (state, action) => {
      state.skip = false // запускаем query
      state.startIndex += action.payload
    },
    updateTotalItems: (state, action) => {
      state.totalItems = action.payload
    },
    addBooks: (state, action) => {
      if (!action.payload) {
        state.books = []
      }
      if (state.startIndex === 0) {
        state.books = clearDuplicates(action.payload) // чистим дополнительно массив от дубликатов
      } else {
        state.books = clearDuplicates([...state.books, ...action.payload]) // чистим дополнительно массив от дубликатов
      }
    },
    resetBooks: (state) => {
      state.books = []
    },
    updateCategory: (state, action) => {
      state.category = action.payload
      state.startIndex = 0
      if (state.query) {
        state.skip = false // запускаем query чтобы сразу менялся список
      }
    },
    updateSorting: (state, action) => {
      state.sorting = action.payload
      state.startIndex = 0
      if (state.query) {
        state.skip = false // запускаем query чтобы сразу менялся список
      }
    },
  },
})

export const {
  addBooks,
  resetBooks,
  enableSkip,
  incrementStartIndex,
  updateTotalItems,
  updateQueryAndResetIndex,
  updateCategory,
  updateSorting,
} = booksSlice.actions

export default booksSlice.reducer