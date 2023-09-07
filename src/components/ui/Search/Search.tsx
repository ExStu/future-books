import { useAppDispatch, useAppSelector } from '@/src/hooks/useTypedSelector'
import { updateQueryAndResetIndex } from '@/src/store/reducers/books.slice'
import { selectQuery } from '@/src/store/selectors'
import { ChangeEvent, FC, FormEvent, useState } from 'react'
import { BsSearch } from 'react-icons/bs'
import SearchInput from './SearchInput'

const Search: FC = () => {

  const dispatch = useAppDispatch()
  const inputState = useAppSelector(selectQuery)
  const [input, setInput] = useState(inputState)

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if(input) {
      dispatch(updateQueryAndResetIndex(input))
    } else return
  }

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value)
  }

  const reset = () => {
    setInput('')
  }

  return (
    <form onSubmit={handleSubmit} className='w-full mb-5 flex justify-center'>
        <SearchInput
          value={input}
          resetInput={reset}
          onChange={handleChange}
        />
        <button
          type='submit'
          className='flex items-center gap-x-2 bg-red px-3 hover:bg-primary transition-colors duration-200 text-white'
        >
          Search
          <BsSearch/>
        </button>
    </form>
  )
}

export default Search;
