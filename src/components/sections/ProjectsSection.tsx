import React from 'react'
import ProjectCard from '../cards/ProjectCard'
import { motion } from 'framer-motion'
import useMediaQuery from '@/hooks/useMediaQuery'

const ProjectsSection = () => {
  const isAboveSmallSreen = useMediaQuery('(min-width: 768px)')
  return (
    <section
      id="projetos"
      className="text-center min-h-screen bg-secondaryBgColor text-textColor pt-24 px-[9%] pb-5 items-center md:flex md:flex-col justify-center"
    >
      <motion.h1
        className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.8 }}
        variants={{
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        Meus <span className="text-mainColor">Projetos</span>
      </motion.h1>
      {isAboveSmallSreen ? (
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 items-center gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <ProjectCard
            src="/images/e-commerce2.jpg"
            alt="foto"
            title="E-commerce"
            content="E-commerce com carrinho de compras utilizando uma api externa"
            href="https://github.com/Julio189/desafio-font-end-consumo-api"
          />
          <ProjectCard
            src="/images/validacaodedados.png"
            alt="foto"
            title="Validação de Dados"
            content="Um fomulário de validação de senha e e-mail"
            href="https://github.com/Julio189/validacao-de-dados"
          />
          <ProjectCard
            src="/images/portfolio.jpg"
            alt="foto"
            title="Meu Portfólio"
            content="Projeto que usei para criar esse portfólio"
            href="https://github.com/Julio189/portfolio"
          />
          <ProjectCard
            src="/images/site-vendas.jpg"
            alt="foto"
            title="Site de Vendas - Modelo"
            content="Modelo de um site Imobiliária"
            href="https://github.com/Julio189/site-responsivo"
          />
          <ProjectCard
            src="/images/slide-show.jpg"
            alt="foto"
            title="Slide Automático"
            content="Projeto de um slide automático e com controles de mudança"
            href="https://github.com/Julio189/slide-show"
          />
          <ProjectCard
            src="/images/portfolio4.jpg"
            alt="foto"
            title="Veja Mais!!"
            content=""
            href="https://github.com/Julio189?tab=repositories"
            cover
          />
        </motion.div>
      ) : (
        <motion.div
          className="grid grid-cols-1 items-center gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          variants={{
            hidden: { opacity: 0, x: 50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <ProjectCard
            src="/images/e-commerce2.jpg"
            alt="foto"
            title="E-commerce"
            content="E-commerce com carrinho de compras utilizando uma api externa"
            href="https://github.com/Julio189/desafio-font-end-consumo-api"
          />
          <ProjectCard
            src="/images/validacaodedados.png"
            alt="foto"
            title="Validação de Dados"
            content="Um fomulário de validação de senha e e-mail"
            href="https://github.com/Julio189/validacao-de-dados"
          />
          <ProjectCard
            src="/images/portfolio.jpg"
            alt="foto"
            title="Meu Portfólio"
            content="Projeto que usei para criar esse portfólio"
            href="https://github.com/Julio189/portfolio"
          />
          <ProjectCard
            src="/images/portfolio4.jpg"
            alt="foto"
            title="Veja Mais!!"
            content=""
            href="https://github.com/Julio189?tab=repositories"
            cover
          />
        </motion.div>
      )}
    </section>
  )
}

export default ProjectsSection
