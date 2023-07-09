import React from 'react'

interface TabLinksProps {
  title: string
  isSelect?: boolean
  onClick: () => void
}

const TabLinks = ({ title, isSelect, onClick }: TabLinksProps) => {
  return (
    <button
      onClick={onClick}
      className={`relative text-lg font-semibold before:bg-mainColor before:absolute before:w-0 before:h-[3px] cursor-pointer before:-bottom-0 before:transition-all before:duration-300 hover:before:w-1/2 
      ${isSelect ? 'before:w-1/2' : 'before:w-0'}`}
    >
      {title}
    </button>
  )
}

export default TabLinks
