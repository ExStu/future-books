'use client'

import { useAppSelector } from '@/src/hooks/useTypedSelector'
import { selectAllBooks } from '@/src/store/selectors'
import { FC } from 'react'
import BookItem from '../ui/BookItem/BookItem'

const BookList: FC = () => {

  const books = useAppSelector(selectAllBooks)

  return (
    <>
      {books ? (
        <div className='grid gap-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1'>
          {books.map((book) => (
            <BookItem key={book.id} id={book.id} item={book.volumeInfo}/>
          ))}
        </div>
      ): (
        <div className='flex justify-center mt-[15%]'>Sorry, but no results were found with your query and filters</div>
      )}
    </>
    
  )
}

export default BookList;
