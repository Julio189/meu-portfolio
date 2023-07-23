'use client'

import React, { useState } from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import { RiMenu3Line } from 'react-icons/ri'
import { motion } from 'framer-motion'

import NavbarItems from './NavbarItems'
import useMediaQuery from '@/hooks/useMediaQuery'
import Logo from './Logo'

interface NavbarProps {
  selectedPage: string
  setSelectedPage: any
}

const Navbar = ({ selectedPage, setSelectedPage }: NavbarProps) => {
  const [isMenuToogle, setIsMenuToogle] = useState(false)
  const isAboveSmallScreens = useMediaQuery('(min-width: 768px)')
  return (
    <header className="flex justify-between items-center fixed top-0 left-0 py-6 w-full px-[9%] bg-primaryBgColor z-50">
      <Logo />
      <div className="flex items center justify-center">
        {isAboveSmallScreens ? (
          <motion.ul
            className="flex gap-10"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8 }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <NavbarItems
              page="Início"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <NavbarItems
              page="Sobre"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <NavbarItems
              page="Serviços"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <NavbarItems
              page="Projetos"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <NavbarItems
              page="Contato"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
          </motion.ul>
        ) : (
          <button
            className="rounded-full bg-mainColor text-textColor p-2"
            onClick={() => setIsMenuToogle(!isMenuToogle)}
          >
            <RiMenu3Line />
          </button>
        )}

        {!isAboveSmallScreens && isMenuToogle && (
          <motion.div
            className="fixed right-0 bottom-0 h-full bg-mainColor w-[300px]"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6 }}
            variants={{
              hidden: { opacity: 0, x: 50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <div className="absolute -right-1 -top-5 flex justify-end pl-12 pb-12 p-12">
              <button
                className="rounded-full bg-textColor text-mainColor p-2"
                onClick={() => setIsMenuToogle(!isMenuToogle)}
              >
                <AiOutlineClose />
              </button>
            </div>
            <motion.ul
              className="flex flex-col gap-10 ml-[33%] mt-28"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 1 }}
              variants={{
                hidden: { opacity: 0, x: 50 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              <NavbarItems
                page="Início"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
              <NavbarItems
                page="Sobre"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
              <NavbarItems
                page="Serviços"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
              <NavbarItems
                page="Projetos"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
              <NavbarItems
                page="Contato"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
            </motion.ul>
          </motion.div>
        )}
      </div>
    </header>
  )
}

export default Navbar
