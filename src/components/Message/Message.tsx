import {FC, ReactNode} from 'react'

interface IMessage {
  children: ReactNode
}

const Message: FC<IMessage> = ({children}) => {
  return (
    <div className='mt-[10%] flex justify-center text-lg font-medium'>
      {children}
    </div>
  )
}

export default Message;
