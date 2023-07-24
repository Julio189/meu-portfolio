import Image from 'next/image'
import { motion } from 'framer-motion'
import Typewriter from 'typewriter-effect'

import { FaInstagram } from '@react-icons/all-files/fa/FaInstagram'
import { FaLinkedin } from '@react-icons/all-files/fa/FaLinkedin'
import { FiGithub } from '@react-icons/all-files/fi/FiGithub'

import Button from '@/components/shared/Button'
import SocialMedia from '@/components/shared/SocialMedia'
import ButtonAchor from '../shared/ButtonAchor'

interface HomeSectionProps {
  setSelectedPage: any
}

const HomeSection = ({ setSelectedPage }: HomeSectionProps) => {
  return (
    <section
      className="bg-primaryBgColor text-textColor min-h-screen md:flex pt-24 md:pt-28 px-[9%] md:pb-5 items-center"
      id="início"
    >
      <div className="w-full items-center justify-center flex flex-col md:max-w-[46vw] md:pr-6">
        <motion.div
          className="items-center flex flex-col"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-10">
            Olá, Meu nome é
          </h3>
          <h1 className="text-5xl md:text-6xl font-bold leading-3 mb-10">
            Julio Cesar
          </h1>
          <h3 className="text-2xl md:text-3xl font-bold mb-3 text-center sm:text-start sm:flex gap-2">
            Eu sou um
            <span className="text-mainColor">
              <Typewriter
                options={{
                  strings: ['Desenvolvedor Web'],
                  autoStart: true,
                  loop: true,
                }}
              />
            </span>
          </h3>
          <p className="text-base mb-5 max-w-xl text-center">
            Cursando Superior em Análise e Desenvolvimento de Sistemas e formado
            como técnico em Desenvolvimento de Sistemas
          </p>
        </motion.div>
        <motion.div
          className="flex mb-10 gap-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.9, delay: 0.3 }}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1 },
          }}
        >
          <SocialMedia
            href="https://www.linkedin.com/in/julio-de-jesus/"
            icon={<FaLinkedin size={20} />}
          />
          <SocialMedia
            href="https://github.com/Julio189"
            icon={<FiGithub size={20} />}
          />
          <SocialMedia
            href="https://www.instagram.com/julio_jesus013/"
            icon={<FaInstagram size={20} />}
          />
        </motion.div>
        <motion.div
          className="flex gap-7"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.9, delay: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <Button
            name="Baixe o CV"
            href="/documents/Curriculo-Julio.pdf"
            cover
            target="_blank"
          />
          <ButtonAchor
            onClick={() => setSelectedPage('contato')}
            name="Fale comigo"
            href="#contato"
          />
        </motion.div>
      </div>
      <motion.div
        className="flex items-center justify-center max-w-[46vw] mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        variants={{
          hidden: { opacity: 0, x: 50 },
          visible: { opacity: 1, x: 0 },
        }}
      >
        <Image
          className="rounded-full mb-7 pt-4 md:mb-0 md:pt-0"
          src="/images/imagemedit4.png"
          width={450}
          height={300}
          alt="eu"
        />
      </motion.div>
    </section>
  )
}

export default HomeSection
