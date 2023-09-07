'use client'

import { FC } from 'react'
import BookList from '../components/BookList/BookList'
import BookListMore from '../components/BookListMore/BookListMore'
import Container from '../components/Container/Container'
import TotalItems from '../components/TotalItems/TotalItems'
import { useAppSelector } from '../hooks/useTypedSelector'
import { selectIfAnyBooks } from '../store/selectors'
import HeaderBtm from '../components/HeaderBtm/HeaderBtm'

const HomePage: FC = () => {

  const isAnyBooks = useAppSelector(selectIfAnyBooks)

  return (
    <div>
      <HeaderBtm/>
      <Container>
        {isAnyBooks ? <TotalItems/> : null}
        <BookList/>
        <BookListMore/>
      </Container>
    </div>
  )
}

export default HomePage;
