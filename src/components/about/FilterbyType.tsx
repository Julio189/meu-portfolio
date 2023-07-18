import { FilterType } from '@/types/FilterType'
import TabContent from './TabContent'
import TabContentItem from './TabContentItem'
import TabLinks from './TabLinks'
import { useFilter } from '@/hooks/useFilter'
import { motion } from 'framer-motion'

const FilterbyType = () => {
  const { type, setType } = useFilter()

  const handleChange = (value: FilterType) => {
    setType(value)
  }
  return (
    <>
      <motion.div
        className="flex mt-5 mb-6 gap-12"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        variants={{
          hidden: { opacity: 0, x: -50 },
          visible: { opacity: 1, x: 0 },
        }}
      >
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
      </motion.div>

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
