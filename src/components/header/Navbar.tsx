'use client'

import React, { useState } from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { AiOutlineClose } from 'react-icons/ai'

import { PiMoonBold } from 'react-icons/pi'
import { RiMenu3Line } from 'react-icons/ri'

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
          <ul className="flex gap-10">
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
          </ul>
        ) : (
          <button
            className="rounded-full bg-mainColor text-textColor p-2"
            onClick={() => setIsMenuToogle(!isMenuToogle)}
          >
            <RiMenu3Line />
          </button>
        )}

        {!isAboveSmallScreens && isMenuToogle && (
          <div className="fixed right-0 bottom-0 h-full bg-mainColor w-[300px]">
            <div className="absolute -right-1 -top-5 flex justify-end pl-12 pb-12 p-12">
              <button
                className="rounded-full bg-textColor text-mainColor p-2"
                onClick={() => setIsMenuToogle(!isMenuToogle)}
              >
                <AiOutlineClose />
              </button>
            </div>
            <ul className="flex flex-col gap-10 ml-[33%] mt-28">
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
            </ul>
          </div>
        )}
      </div>
    </header>
  )
}

export default Navbar
