'use client'

import { IVolumeInfo } from '@/src/types/book.interface'
import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'
import AuthorList from '../../../utils/AuthorList'

interface IBookItem {
  id: string
  item: IVolumeInfo
}

const BookItem: FC<IBookItem> = ({
  id,
  item
}) => {

  if(!item.title) return null

  return (
    <Link
      href={`/book/${id}`}
      className='flex flex-col items-center p-4 rounded-lg hover:shadow-full transition-shadow duration-200'
    >
      <div className='flex justify-center min-h-[200px] mb-6'>
        {item.imageLinks ? (
          <Image
            quality={100}
            src={item.imageLinks?.thumbnail}
            width={200}
            height={300}
            alt={item.title}
            className='max-w-[128px] shadow-lg'
          />
        ): (
          <Image src='/blank.png' alt='blank picture' width={185} height={200}/>
        )}
      </div>
      <div className='flex flex-col items-center w-52 sm:items-start'>
        <div className='text-xs mb-1'>{item.categories?.at(0)}</div>
        <div className='font-semibold line-clamp-2'>{item.title}</div>
        {item.authors && (
          <div>
            <AuthorList list={item.authors}/>
          </div>
        )}
      </div>
    </Link>
  )
}

export default BookItem;
