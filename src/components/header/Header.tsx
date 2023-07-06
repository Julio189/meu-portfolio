import React from 'react'
import Navbar from './Navbar'
import Logo from './Logo'

const Header = () => {
  return (
    <header className="flex justify-between items-center fixed top-0 left-0 py-6 w-full px-[9%] bg-primaryBgColor z-50">
      <Logo />
      <Navbar />
    </header>
  )
}

export default Header
