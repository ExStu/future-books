import { FC, InputHTMLAttributes } from 'react'
import { RxCross1 } from 'react-icons/rx'

interface ISearchInput extends InputHTMLAttributes<HTMLInputElement> {
  resetInput: () => void
}

const SearchInput: FC<ISearchInput> = ({value, resetInput, ...props}) => {

  return (
    <div className='relative w-full sm:w-1/3'>
      <input
        className='border border-white p-3 w-full outline-none focus:border-red'
        type="text"
        name='search'
        value={value}
        placeholder='Search for books...'
        {...props}
      />
      {value && (
        <button
          type='button'
          onClick={resetInput}
          className='absolute top-1/3 right-2'
        >
          <RxCross1/>
        </button>
      )}
    </div>
  )
}

export default SearchInput;
