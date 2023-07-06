import Button from '@/components/shared/Button'
import SocialMedia from '@/components/shared/SocialMedia'
import { FaInstagram, FaLinkedin } from 'react-icons/Fa'
import { FiGithub } from 'react-icons/Fi'

export default function Home() {
  return (
    <section
      className="bg-primaryBgColor text-textColor min-h-screen flex pt-28 px-[9%] pb-5 items-center"
      id="home"
    >
      <div className="max-w-[46vw]">
        <h3 className="text-3xl font-bold mb-10">Olá, Meu nome é</h3>
        <h1 className="text-6xl font-bold leading-3 mb-10">Julio Cesar</h1>
        <h3 className="text-3xl font-bold mb-3">
          Eu sou um <span className="text-mainColor">Desenvolvedor Web</span>
        </h3>
        <p className="text-base mb-5">
          Cursando Superior em Análise e Desenvolvimento de Sistemas e formado
          como técnico em Desenvolvimento de Sistemas
        </p>
        <div className="flex mb-10 gap-3">
          <SocialMedia
            href="https://www.linkedin.com/in/julio-de-jesus/"
            icon={<FaLinkedin size={20} />}
          />
          <SocialMedia
            href="https://github.com/Julio189"
            icon={<FiGithub size={20} />}
          />
          <SocialMedia
            href="https://www.instagram.com/julio_tech.1/"
            icon={<FaInstagram size={20} />}
          />
        </div>
        <div className="flex gap-7">
          <Button name="Baixe o CV" href="/" cover />
          <Button name="Fale comigo" href="/" />
        </div>
      </div>
      <div className="flex items-center justify-center max-w-[46vw] mx-auto">
        <h1>Aqui vai a imagem</h1>
      </div>
    </section>
  )
}
