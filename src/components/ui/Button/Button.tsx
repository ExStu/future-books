import { ButtonHTMLAttributes, FC, ReactNode } from 'react'

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string
  icon?: ReactNode
}

const Button: FC<IButton> = ({className, children, icon, ...rest}) => {
  return (
    <button
      className='p-4 bg-transparent border border-red text-black hover:bg-red hover:text-white transition-colors duration-200 flex self-start items-center gap-x-2' 
      {...rest}
    >
      {children}
      {icon}
    </button>
  )
}

export default Button;
