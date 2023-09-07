import { Categories } from '@/src/const/categories'
import { Sorting } from '@/src/const/sort'
import { useAppDispatch, useAppSelector } from '@/src/hooks/useTypedSelector'
import { updateCategory, updateSorting } from '@/src/store/reducers/books.slice'
import { selectCategory, selectSorting } from '@/src/store/selectors'
import { FC, useCallback } from 'react'
import Select from '../ui/Select/Select'

const Filters: FC = () => {

  const dispatch = useAppDispatch()
  const category = useAppSelector(selectCategory) 
  const sort = useAppSelector(selectSorting)

  const onCategoryChange = useCallback((option: string) => {
    dispatch(updateCategory(option))
  }, [])

  const onSortChange = useCallback((option: string) => {
    dispatch(updateSorting(option))
  }, [])

  return (
    <div className='flex flex-col sm:flex-row justify-center'>
      <Select label='Category' options={Categories} onClick={onCategoryChange} value={category}/>
      <Select label='Sort by' options={Sorting} onClick={onSortChange} value={sort}/>
    </div>
  )
}

export default Filters;
