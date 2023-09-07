import { FC } from 'react'
import styles from './Loader.module.scss'

const Loader: FC = () => {
  return (
    <div className='mx-auto my-0'>
      <span className={styles.loader}></span>
    </div>
  )
}

export default Loader;
