import cn from 'clsx'
import { FC, ReactNode } from 'react'

interface IContainer {
  children: ReactNode
  className?: string
}

const Container: FC<IContainer> = ({children, className}) => {
  return (
    <div className={cn(
      'mx-auto max-w-[1440px] w-full px-10', className
    )}>
      {children}
    </div>
  )
}

export default Container;
