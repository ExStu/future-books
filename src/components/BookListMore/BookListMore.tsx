import { BOOKS_LIMIT } from '@/src/const/app'
import { useAppDispatch, useAppSelector } from '@/src/hooks/useTypedSelector'
import { useGetBooksQuery } from '@/src/services/books.service'
import { addBooks, enableSkip, incrementStartIndex, updateTotalItems } from '@/src/store/reducers/books.slice'
import {
  selectCategory,
  selectLoadMoreResults,
  selectQuery,
  selectSkip,
  selectSorting,
  selectStartIndex
} from '@/src/store/selectors'
import { FC, useEffect } from 'react'
import { BsPlus } from 'react-icons/bs'
import Button from '../ui/Button/Button'
import Loader from '../ui/Loader/Loader'
import Message from '../Message/Message'

const BookListMore: FC = () => {

  const query = useAppSelector(selectQuery)
  const isSkip = useAppSelector(selectSkip)
  const sorting = useAppSelector(selectSorting)
  const category = useAppSelector(selectCategory)
  const startIndex = useAppSelector(selectStartIndex)
  const isMoreResults = useAppSelector(selectLoadMoreResults)

  const dispatch = useAppDispatch()

  const { data, isFetching, isError, isUninitialized } = useGetBooksQuery(
    { query, startIndex, sorting, category },
    { skip: isSkip }
  )

  const onNextStartIndex = () => {
    dispatch(incrementStartIndex(BOOKS_LIMIT))
  }

  useEffect(() => {
    return () => {
      !isSkip && dispatch(enableSkip())
    }
  }, [isSkip])

  useEffect(() => {
    if (data) {
      dispatch(addBooks(data?.items))
      startIndex === 0 && dispatch(updateTotalItems(data.totalItems))
    }
  }, [data])

  return (
    <div>
      {isFetching && (
        <Loader/>
      )}

      {isError && (
        <Message>Something went wrong</Message>
      )}

      {isUninitialized && (
        <Message>Search for any book</Message>
      )}

      {(isMoreResults && !isFetching && !isError) && (
        <div className='flex justify-center py-4'>
          <Button onClick={onNextStartIndex}>
            Load more
            <BsPlus size={28}/>
          </Button>
        </div>
      )}
    </div>
  )
}

export default BookListMore;
