import { IBook } from '../types/book.interface'

export const clearDuplicates = (arr: IBook[]) => {
  if(!arr) return arr // делаем проверку массив пустой
  const newArr = arr.reduce((acc: IBook[], curr) => {
    if (!acc.find(item => item.id === curr.id)) {
      acc.push(curr);
    }
    return acc;
  }, []);
  return newArr;
}