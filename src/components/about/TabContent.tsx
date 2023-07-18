import { motion } from 'framer-motion'

interface TabContentProps {
  children: React.ReactNode
  isSelect?: boolean
}

const TabContent = ({ children, isSelect }: TabContentProps) => {
  return (
    <motion.div
      className={`${isSelect ? 'block' : 'hidden'}`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.8, delay: 0.4 }}
      variants={{
        hidden: { opacity: 0, x: -50 },
        visible: { opacity: 1, x: 0 },
      }}
    >
      <ul>{children}</ul>
    </motion.div>
  )
}

export default TabContent
