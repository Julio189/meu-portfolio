interface TabContentItemProps {
  title: string
  content: string
  isSelect?: boolean
}

const TabContentItem = ({ title, content, isSelect }: TabContentItemProps) => {
  return (
    <li>
      <button>{title}</button>
      <br />
      {content}
    </li>
  )
}

export default TabContentItem
