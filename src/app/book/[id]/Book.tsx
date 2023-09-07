'use client'

import Container from '@/src/components/Container/Container'
import Button from '@/src/components/ui/Button/Button'
import Loader from '@/src/components/ui/Loader/Loader'
import { useGetBookByIdQuery } from '@/src/services/books.service'
import AuthorList from '@/src/utils/AuthorList'
import Image from 'next/image'
import Link from 'next/link'
import { useParams, useRouter } from 'next/navigation'
import { FC } from 'react'
import { IoReturnDownBackOutline } from 'react-icons/io5'

const Book: FC = () => {

  const params = useParams()
  const router = useRouter()
  const idBook = params['id'] as string
  const {data, isFetching, isError} = useGetBookByIdQuery(idBook)

  if(!data) return null;
  if(!data.volumeInfo.title) return null
  
  return (

    <Container className='flex flex-col py-10'>
      <Button onClick={() => router.back()}>
        <IoReturnDownBackOutline size={28}/>
        Назад
      </Button>
      {isError && (
        <div>Something went wrong, sorry</div>
      )}
      {isFetching && <Loader/>}
      <div className='flex justify-center flex-col md:flex-row md:justify-between'>
        <div className='w-full md:w-1/2 flex justify-center items-start'>
          {data.volumeInfo.imageLinks ? (
            <Image
              quality={100}
              src={data.volumeInfo.imageLinks?.thumbnail}
              width={300}
              height={375}
              alt={data.volumeInfo.title}
            />
          ): (
            <Image
              quality={100}
              src='/blank.png'
              alt='blank picture'
              width={300}
              height={375}
            />
          )}
        </div>
        <div className='w-full md:w-1/2'>
          <div className='mb-2'>
            {data.volumeInfo.categories?.map((category) => (
              <span key={category}>{category}</span>
            ))}
          </div>
          <h3 className='font-semibold text-lg mb-2'>{data.volumeInfo.title}</h3>
          {data.volumeInfo.authors && (
            <div>
              <AuthorList className='mb-5' list={data.volumeInfo.authors}/>
            </div>
          )}
          <p className='mb-4'>{data.volumeInfo.description}</p>
          {data.volumeInfo.infoLink && (
            <div className='flex'>
              <Link
                href={data.volumeInfo.infoLink}
                className='flex self-start p-4 border border-red hover:bg-red hover:text-white transition-colors duration-200'
                target='_blank'
              >
                Go to Google Books
              </Link>
            </div>
          )}
        </div>
      </div>
      
    </Container>
  )
}

export default Book;
