'use client'
import Image from 'next/image'
import FilterbyType from '../about/FilterbyType'
import useMediaQuery from '@/hooks/useMediaQuery'
import { motion } from 'framer-motion'

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
          <motion.div
            className="basis-[35%]"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <Image
              className="rounded-xl pb-8"
              src="/images/imagemedit6.png"
              alt="eu"
              width={350}
              height={700}
            />
          </motion.div>
        ) : (
          <motion.div
            className="basis-[35%]"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <Image
              className="rounded-xl pb-8 mx-auto"
              src="/images/imagemedit6.png"
              alt="eu"
              width={150}
              height={150}
            />
          </motion.div>
        )}

        <div className="basis-[60%]">
          <motion.h1
            className="text-3xl text-center sm:text-4xl md:text-5xl font-bold mb-5"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6 }}
            variants={{
              hidden: { opacity: 0, y: -50 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            Sobre <span className="text-mainColor">Mim</span>
          </motion.h1>

          <motion.p
            className="text-sm sm:text-base"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1 },
            }}
          >
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia
            sed molestiae esse aliquam dolor minima quibusdam cupiditate eos ab
            earum amet repellat, at placeat odit ullam. Fugit beatae corporis
            similique.
          </motion.p>
          <FilterbyType />
        </div>
      </div>
    </section>
  )
}

export default AboutSection
