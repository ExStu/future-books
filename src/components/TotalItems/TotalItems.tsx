import { useAppSelector } from '@/src/hooks/useTypedSelector'
import { selectTotalItems } from '@/src/store/selectors'
import { FC } from 'react'

const TotalItems: FC = () => {

  const total = useAppSelector(selectTotalItems)

  return (
    <div className='flex justify-center py-5'>
      Total items found:&nbsp;
      {total}
    </div>
  )
}

export default TotalItems;
