'use client'

import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'
import Container from '../Container/Container'
import Filters from '../Filters/Filters'
import Search from '../ui/Search/Search'

const Header: FC = () => {
  return (
    <header>
      <Container className='flex justify-center'>
        <Link href='/' className='flex self-start'>
          <Image
            src='/logo.png'
            priority
            width={300}
            height={167}
            alt='logo'
          />
        </Link>
      </Container>
    </header>
  )
}

export default Header;
