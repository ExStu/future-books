import { createSelector } from '@reduxjs/toolkit'

import { BOOKS_LIMIT } from '../const/app'
import { RootState } from '../store/store'

export const selectStartIndex = (state: RootState) => state.books.startIndex

export const selectSkip = (state: RootState) => state.books.skip

export const selectQuery = (state: RootState) => state.books.query

export const selectAllBooks = (state: RootState) => state.books.books

export const selectCategory = (state: RootState) => state.books.category

export const selectSorting = (state: RootState) => state.books.sorting

export const selectTotalItems = (state: RootState) => state.books.totalItems

export const selectLoadMoreResults = (state: RootState) =>
  state.books.totalItems > state.books.startIndex + BOOKS_LIMIT

export const selectIfAnyBooks = createSelector(selectAllBooks, (books) =>
  books ? !!books.length : 0
)