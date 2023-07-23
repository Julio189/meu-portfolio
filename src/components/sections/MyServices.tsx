import ServicesCard from '../cards/ServicesCard'
import { BsDatabaseCheck } from 'react-icons/bs'
import { HiCode } from 'react-icons/hi'
import { FaComputer } from 'react-icons/fa6'
import { motion } from 'framer-motion'

const MyServices = () => {
  return (
    <section
      className="bg-primaryBgColor text-textColor min-h-screen pt-28 sm:pt-32 px-[9%] pb-4 md:pb-5 flex flex-col items-center"
      id="serviços"
    >
      <motion.h3
        className="text-3xl sm:text-4xl md:text-5xl font-bold mb-16 md:mb-20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.8 }}
        variants={{
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        Meus <span className="text-mainColor">Serviços</span>
      </motion.h3>
      <motion.div
        className="grid sm:grid-cols-2 xl:grid-cols-3 items-center justify-center gap-5"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1 },
        }}
      >
        <ServicesCard
          icon={<HiCode size={50} />}
          title="Desenvolvedor Web"
          content="Criação e manutenção web tanto front end como back end"
        />
        <ServicesCard
          icon={<BsDatabaseCheck size={50} />}
          title="Banco de Dados"
          content="Criação e manutenção de bancos de dados e api's, api rest"
        />
        <ServicesCard
          icon={<FaComputer size={50} />}
          title="Softwares e Hardwares"
          content="Configuração de softwares e manuntenção de hardwares"
        />
      </motion.div>
    </section>
  )
}

export default MyServices
