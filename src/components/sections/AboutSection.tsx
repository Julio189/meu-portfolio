'use client'
import Image from 'next/image'
import FilterbyType from '../about/FilterbyType'
import useMediaQuery from '@/hooks/useMediaQuery'

interface AboutSectionProps {
  setSelectedPage: any
}

const AboutSection = ({ setSelectedPage }: AboutSectionProps) => {
  const isAbouveSmallScreens = useMediaQuery('(min-width: 768px)')
  return (
    <section
      id="sobre"
      className="min-h-screen bg-secondaryBgColor text-textColor pt-24 sm:pt-32 md:pt-40 px-[9%] pb-5 items-center"
    >
      <div className="sm:flex sm:justify-between">
        {isAbouveSmallScreens ? (
          <div className="basis-[35%]">
            <Image
              className="rounded-xl pb-8"
              src="/images/imagemedit6.png"
              alt="eu"
              width={350}
              height={700}
            />
          </div>
        ) : (
          <div className="basis-[35%]">
            <Image
              className="rounded-xl pb-8 mx-auto"
              src="/images/imagemedit6.png"
              alt="eu"
              width={150}
              height={150}
            />
          </div>
        )}

        <div className="basis-[60%]">
          <h1 className="text-3xl text-center sm:text-4xl md:text-5xl font-bold mb-5">
            Sobre <span className="text-mainColor">Mim</span>
          </h1>
          <p className="text-sm sm:text-base">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia
            sed molestiae esse aliquam dolor minima quibusdam cupiditate eos ab
            earum amet repellat, at placeat odit ullam. Fugit beatae corporis
            similique.
          </p>
          <FilterbyType />
        </div>
      </div>
    </section>
  )
}

export default AboutSection
