import React from 'react'
import NavbarItems from './NavbarItems'
import { PiMoonBold } from 'react-icons/pi'

const Navbar = () => {
  return (
    <div className="flex items center justify-center">
      <ul className="flex gap-10">
        <NavbarItems navigation="/" titulo="Início" />
        <NavbarItems navigation="/" titulo="Sobre" />
        <NavbarItems navigation="/" titulo="Habilidades" />
        <NavbarItems navigation="/" titulo="Projetos" />
        <NavbarItems navigation="/" titulo="Contato" />
      </ul>
      <div className="ml-7 cursor-pointer">
        <PiMoonBold size={25} />
      </div>
    </div>
  )
}

export default Navbar
