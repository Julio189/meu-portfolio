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
          title="Habilidades"
          isSelect={type === FilterType.SKILLS}
          onClick={() => handleChange(FilterType.SKILLS)}
        />
        <TabLinks
          title="Educação"
          isSelect={type === FilterType.EDUCATION}
          onClick={() => handleChange(FilterType.EDUCATION)}
        />
        <TabLinks
          title="Programação"
          isSelect={type === FilterType.EXPERIENCE}
          onClick={() => handleChange(FilterType.EXPERIENCE)}
        />
      </motion.div>

      <TabContent isSelect={type === FilterType.SKILLS}>
        <TabContentItem
          title="Desenvolvimento Web"
          content="Criação e manutenção de sites"
        />
        <TabContentItem
          title="Banco de Dados"
          content="Criação e manutenção de banco de dados, api's"
        />
        <TabContentItem
          title="E-commerce"
          content="Criação de e-commerce, carrinho de compras"
        />
      </TabContent>

      <TabContent isSelect={type === FilterType.EXPERIENCE}>
        <TabContentItem
          title="Front - end"
          content="Html, Css, Javascipt, Typescript"
        />
        <TabContentItem
          title="Back - end"
          content="Node.js, Php, MySql, Python"
        />
        <TabContentItem
          title="Frameworks"
          content="React.js, Next.js, Laravel"
        />
      </TabContent>

      <TabContent isSelect={type === FilterType.EDUCATION}>
        <TabContentItem
          title="Faculdade Anhanguera"
          content="Análise e Desenvolvimento de Sistemas"
        />
        <TabContentItem
          title="ETEC Presidente Vargas"
          content="Desenvolvimento de Sistemas"
        />
        <TabContentItem title="CCAA" content="Inglês Intermediário" />
      </TabContent>
    </>
  )
}

export default FilterbyType
