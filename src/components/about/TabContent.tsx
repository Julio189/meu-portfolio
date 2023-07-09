import React from 'react'

interface TabContentProps {
  children: React.ReactNode
  isSelect?: boolean
}

const TabContent = ({ children, isSelect }: TabContentProps) => {
  return (
    <div className={`${isSelect ? 'block' : 'hidden'}`}>
      <ul>{children}</ul>
    </div>
  )
}

export default TabContent
