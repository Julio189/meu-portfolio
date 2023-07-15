'use client'
import Image from 'next/image'
import FilterbyType from '../about/FilterbyType'

const AboutSection = () => {
  return (
    <section
      id="about"
      className="min-h-screen bg-secondaryBgColor text-textColor pt-40 px-[9%] pb-5 items-center"
    >
      <div className="flex justify-between">
        <div className="basis-[35%]">
          <Image
            className="rounded-xl"
            src="/images/imagemedit6.png"
            alt="eu"
            width={350}
            height={700}
          />
        </div>
        <div className="basis-[60%]">
          <h1 className="text-5xl font-bold mb-5">
            Sobre <span className="text-mainColor">Mim</span>
          </h1>
          <p>
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
