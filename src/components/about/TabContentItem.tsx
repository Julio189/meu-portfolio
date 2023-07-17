interface TabContentItemProps {
  title: string
  content: string
  isSelect?: boolean
}

const TabContentItem = ({ title, content, isSelect }: TabContentItemProps) => {
  return (
    <li>
      <h3 className="text-base sm:text-lg md:text-xl text-mainColor font-bold mb-2">
        {title}
      </h3>
      <h4 className="text-sm mb-4 md:text-base">{content}</h4>
    </li>
  )
}

export default TabContentItem
