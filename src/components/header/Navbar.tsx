import React from 'react'
import NavbarItems from './NavbarItems'
import { PiMoonBold } from 'react-icons/pi'
import { RiMenu3Line } from 'react-icons/ri'

const Navbar = () => {
  return (
    <div className="flex items center justify-center">
      <ul className="flex gap-10">
        <NavbarItems navigation="#home" titulo="Início" />
        <NavbarItems navigation="#about" titulo="Sobre" />
        <NavbarItems navigation="#services" titulo="Serviços" />
        <NavbarItems navigation="/" titulo="Projetos" />
        <NavbarItems navigation="/" titulo="Contato" />
        <PiMoonBold size={25} />
      </ul>
      <div className="ml-7 cursor-pointer hidden">
        <RiMenu3Line size={25} />
      </div>
    </div>
  )
}

export default Navbar
