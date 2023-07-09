import { FilterType } from '@/types/FilterType'
import TabContent from './TabContent'
import TabContentItem from './TabContentItem'
import TabLinks from './TabLinks'
import { useFilter } from '@/hooks/useFilter'

const FilterbyType = () => {
  const { type, setType } = useFilter()

  const handleChange = (value: FilterType) => {
    setType(value)
  }
  return (
    <>
      <div className="flex mt-5 mb-10 gap-12">
        <TabLinks
          title="Skills"
          isSelect={type === FilterType.SKILLS}
          onClick={() => handleChange(FilterType.SKILLS)}
        />
        <TabLinks
          title="Expience"
          isSelect={type === FilterType.EXPERIENCE}
          onClick={() => handleChange(FilterType.EXPERIENCE)}
        />
        <TabLinks
          title="Education"
          isSelect={type === FilterType.EDUCATION}
          onClick={() => handleChange(FilterType.EDUCATION)}
        />
      </div>

      <TabContent isSelect={type === FilterType.SKILLS}>
        <TabContentItem title="skilss" content="Programador" />
        <TabContentItem title="skilss" content="Programador" />
        <TabContentItem title="skillss" content="Programador" />
      </TabContent>

      <TabContent isSelect={type === FilterType.EXPERIENCE}>
        <TabContentItem title="expienci" content="Programador" />
        <TabContentItem title="expien" content="Programador" />
        <TabContentItem title="expien" content="Programador" />
      </TabContent>

      <TabContent isSelect={type === FilterType.EDUCATION}>
        <TabContentItem title="education" content="Programador" />
        <TabContentItem title="education" content="Programador" />
        <TabContentItem title="education" content="Programador" />
      </TabContent>
    </>
  )
}

export default FilterbyType
