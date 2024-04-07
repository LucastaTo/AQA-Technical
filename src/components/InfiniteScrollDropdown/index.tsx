import React, { useState, useEffect } from 'react'

interface InfiniteScrollDropdownProps<T> {
  data: T[]
  renderOption: (item: T) => React.ReactNode
  onClick: (item: T) => void
}

const InfiniteScrollDropdown = <T extends any>({ data, renderOption, onClick }: InfiniteScrollDropdownProps<T>) => {
  const [items, setItems] = useState<T[]>(data.slice(0, 100))
  const [startIndex, setStartIndex] = useState<number>(0)

  useEffect(() => {
    const handleScroll = () => {
      if (window.innerHeight + document.documentElement.scrollTop === document.documentElement.offsetHeight) {
        const nextItems = data.slice(startIndex, startIndex + 200)
        setItems((prevItems) => [...prevItems, ...nextItems])
        setStartIndex(startIndex + 200)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [data.length, startIndex])

  return (
    <div className='h-200 overflow-y-auto flex flex-col items-start'>
      {items.map((item, index) => (
        <button type='button' key={index} className='p-2 w-full text-left' onClick={() => onClick(item)}>
          {renderOption(item)}
        </button>
      ))}
    </div>
  )
}

export default InfiniteScrollDropdown
