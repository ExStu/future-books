import useOutside from '@/src/hooks/useOutside'
import { FC, useState } from 'react'

interface ISelect {
  options: string[]
  value: string
  onClick: (option: string) => void
  label: string
}

const Select: FC<ISelect> = ({options, value, onClick, label}) => {

  const [isOpen, setIsOpen] = useState(false)

  const handleClick = () => {
    setIsOpen(!isOpen)
  }

  const onClose = () => {
    setIsOpen(false)
  }

  const {ref} = useOutside(onClose)

  const handleOptionClick = (option: string) => {
    setIsOpen(false)
    onClick(option)
  }

  return (

    <div className='relative w-full sm:w-1/3' ref={ref}>
      <span>{label}</span>
      <div
        onClick={handleClick}
        className='border border-gray bg-white p-3 capitalize cursor-pointer'
      >
        {value}
      </div>
      {isOpen && (
        <div className='border border-gray absolute top-18 left-0 w-full bg-white text-black flex flex-col z-10'>
          {options.map((option) => (
            <button
              key={option}
              onClick={() => handleOptionClick(option)}
              className='p-3 capitalize hover:bg-gray hover:text-red transition-colors duration-200'
            >
                {option}
            </button>
          ))}
      </div>
      )}
    </div>
  )
}

export default Select;
