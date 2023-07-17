import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'

interface NavbarItemsProps {
  selectedPage: string
  page: string
  setSelectedPage: any
}

const NavbarItems = ({
  page,
  selectedPage,
  setSelectedPage,
}: NavbarItemsProps) => {
  const lowerCasePage = page.toLowerCase()
  return (
    <nav>
      <li>
        <AnchorLink
          className={`${
            selectedPage === lowerCasePage ? 'before:w-full' : ''
          } relative text-lg font-semibold before:bg-white before:absolute before:w-0 before:h-[3px] before:-bottom-0 before:transition-all before:duration-300 hover:before:w-full`}
          href={`#${lowerCasePage}`}
          onClick={() => setSelectedPage(lowerCasePage)}
        >
          {page}
        </AnchorLink>
      </li>
    </nav>
  )
}

export default NavbarItems
