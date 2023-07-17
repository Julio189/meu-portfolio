import ServicesCard from '../cards/ServicesCard'
import { BsDatabaseCheck } from 'react-icons/bs'
import { HiCode } from 'react-icons/hi'
import { FaComputer } from 'react-icons/fa6'

const MyServices = () => {
  return (
    <section
      className="bg-primaryBgColor text-textColor min-h-screen pt-28 sm:pt-32 px-[9%] pb-4 md:pb-5 flex flex-col items-center"
      id="serviços"
    >
      <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-16 md:mb-20">
        Meus <span className="text-mainColor">Serviços</span>
      </h3>
      <div className="grid sm:grid-cols-2 xl:grid-cols-3 items-center justify-center gap-5">
        <ServicesCard
          icon={<HiCode size={50} />}
          title="Desenvolvedor Web"
          content="Criação de sites tanto front end como back end, utilizando mais as linguagens javascript e php"
        />
        <ServicesCard
          icon={<BsDatabaseCheck size={50} />}
          title="Banco de Dados"
          content="Criação de sites tanto front end como back end, utilizando mais as linguagens javascript e php"
        />
        <ServicesCard
          icon={<FaComputer size={50} />}
          title="Softwares e Hardwares"
          content="Criação de sites tanto front end como back end, utilizando mais as linguagens javascript e php"
        />
      </div>
    </section>
  )
}

export default MyServices
