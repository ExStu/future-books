import { FC } from 'react'
import Filters from '../Filters/Filters'
import Search from '../ui/Search/Search'
import Container from '../Container/Container'

const HeaderBtm: FC = () => {
  return (
    <div className='bg-gray py-7'>
      <Container className='flex flex-col'>
        <Search/>
        <Filters/>
      </Container>
    </div>
  )
}

export default HeaderBtm;
