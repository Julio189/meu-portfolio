import Link from 'next/link'
import React from 'react'

import { BiUpArrowAlt } from 'react-icons/bi'

const Footer = () => {
  return (
    <footer className="text-white flex justify-between items-center flex-wrap py-5 px-[9%] bg-secondaryBgColor">
      <div>
        <p>Copyright &copy; 2023 by Julio</p>
      </div>
      <div>
        <Link href="/">
          <div className="relative text-mainColor z-10 flex justify-center items-center w-10 h-10 bg-transparent border-2 border-[#20bbf8] rounded-md overflow-hidden before:absolute before:top-2/4 before:left-2/4 before:-translate-x-2/4 before:-translate-y-2/4 before:w-0 before:h-[350%] before:bg-[#20bbf8] before:-z-20 transition-colors before:duration-500 hover:before:w-full hover:text-white hover:border-white cursor-pointer">
            <BiUpArrowAlt size={30} />
          </div>
        </Link>
      </div>
    </footer>
  )
}

export default Footer
