import Link from 'next/link'
import React from 'react'

interface NavbarItemsProps {
  navigation: string
  titulo: string
}

const NavbarItems = ({ navigation, titulo }: NavbarItemsProps) => {
  return (
    <nav>
      <li>
        <Link href={navigation}>
          <h3 className="relative text-lg font-semibold before:bg-white before:absolute before:w-0 before:h-[3px] before:-bottom-0 before:transition-all before:duration-300 hover:before:w-full">
            {titulo}
          </h3>
        </Link>
      </li>
    </nav>
  )
}

export default NavbarItems
