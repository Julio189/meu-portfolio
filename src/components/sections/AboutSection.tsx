'use client'
import FilterbyType from '../about/FilterbyType'

const AboutSection = () => {
  return (
    <section
      id="about"
      className="min-h-screen bg-secondaryBgColor text-textColor pt-28 px-[9%] pb-5 items-center"
    >
      <div className="flex justify-between">
        <div className="basis-[35%]">
          <h1>Aqui vai a imgaem</h1>
        </div>
        <div className="basis-[60%]">
          <h1 className="text-4xl font-bold mb-4">Sobre Mim</h1>
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
