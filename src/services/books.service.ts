import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

import { APIKey, APIUrl } from '../const/api'
import { BOOKS_LIMIT } from '../const/app'
import { CategoryEnum } from '../const/categories'
import { SortingEnum } from '../const/sort'
import { resetBooks } from '../store/reducers/books.slice'
import { RootState } from '../store/store'
import { IBook } from '../types/book.interface'

interface RequestData {
  query: string
  startIndex: number
  category: CategoryEnum
  sorting: SortingEnum
}

export const booksApi = createApi({
  reducerPath: 'booksApi',
  baseQuery: fetchBaseQuery({
    baseUrl: APIUrl,
  }),
  endpoints: (builder) => ({
    getBooks: builder.query({
      query: (data: RequestData) => {
        const subject = data.category !== CategoryEnum.ALL ? `+subject:${data.category}` : ''
        return `?q=${data.query}${subject}&startIndex=${data.startIndex}&orderBy=${data.sorting}&maxResults=${BOOKS_LIMIT}&key=${APIKey}`
      },
      async onQueryStarted(data, { dispatch, getState }) {
        const state = getState() as RootState

        state.books.startIndex === 0 && dispatch(resetBooks())
      },
    }),
    getBookById: builder.query<IBook, string | string[] | undefined>({
      query: (id) => `/${id}?key=${APIKey}`
    })
  }),
})

export const { useGetBooksQuery, useGetBookByIdQuery } = booksApi