import {FC, Fragment} from 'react';
import cn from 'clsx'

interface IAuthorList {
  list: string[]
  className?: string
}

const AuthorList: FC<IAuthorList> = ({list, className}) => {
    return (
      <div className={cn(
        'flex flex-wrap items-center', className
      )}>
        {list.map((item, index) => <Fragment key={index}>
          <span className='text-xs font-medium'>{item}</span>{index !== list.length - 1 ? `,` : ''}&nbsp;
        </Fragment>)}
      </div>
    )
}

export default AuthorList;
