import { useEffect, useRef } from 'react'

export default function useOutside(callback: () => void) {
  const ref = useRef<any>(null)

  const handleOutside = (event: MouseEvent) => {
    if (!(ref.current == event.target || ref.current.contains(event.target))) {
      callback()
    }
  }

  useEffect(() => {
    document.addEventListener('click', handleOutside, true)
    return () => {
      document.removeEventListener('click', handleOutside, true)
    }
  }, [])

  return { ref }
}
