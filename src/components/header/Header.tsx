import React from 'react'
import Navbar from './Navbar'
import Logo from './Logo'

const Header = () => {
  return (
    <header className="flex justify-between items-center fixed h-16 py-6 w-full px-[9%] bg-yellow-400">
      <Logo />
      <Navbar />
    </header>
  )
}

export default Header
