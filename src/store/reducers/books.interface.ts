import { CategoryEnum } from '../../const/categories'
import { SortingEnum } from '../../const/sort'
import { IBook } from '../../types/book.interface'

export interface IBookState {
  startIndex: number
  skip: boolean
  query: string
  totalItems: number
  books: IBook[]
  category: CategoryEnum
  sorting: SortingEnum
  isLoading: boolean
}