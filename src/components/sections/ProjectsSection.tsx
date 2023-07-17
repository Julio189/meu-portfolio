import React from 'react'
import ProjectCard from '../cards/ProjectCard'

const ProjectsSection = () => {
  return (
    <section
      id="projetos"
      className="text-center min-h-screen bg-secondaryBgColor text-textColor pt-24 px-[9%] pb-5 items-center md:flex md:flex-col justify-center"
    >
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8">
        Meus <span className="text-mainColor">Projetos</span>
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 items-center gap-6">
        <ProjectCard
          src="/images/portfolio1.jpg"
          alt="foto"
          title="projeto"
          content="Nesse projeto projeto projeto pojeto hdfjhasdjklfhkjasd lksdjflaslkdhf jhsdfkajsf dfhsakdjfaj s"
          href="/"
        />
        <ProjectCard
          src="/images/portfolio2.jpg"
          alt="foto"
          title="projeto"
          content="Nesse projeto projeto projeto pojeto"
          href="/"
        />
        <ProjectCard
          src="/images/portfolio3.jpg"
          alt="foto"
          title="projeto"
          content="Nesse projeto projeto projeto pojeto"
          href="/"
        />
        <ProjectCard
          src="/images/portfolio4.jpg"
          alt="foto"
          title="projeto"
          content="Nesse projeto projeto projeto pojeto"
          href="/"
        />
        <ProjectCard
          src="/images/portfolio5.jpg"
          alt="foto"
          title="projeto"
          content="Nesse projeto projeto projeto pojeto"
          href="/"
        />
        <ProjectCard
          src="/images/portfolio6.jpg"
          alt="foto"
          title="Veja Mais"
          content=""
          href="/"
          cover
        />
      </div>
    </section>
  )
}

export default ProjectsSection
