/* eslint-disable prettier/prettier */

import AnchorLink from "react-anchor-link-smooth-scroll"

interface ButtonAchorProps {
  href: string
  name: string
  transition?: any
  target?: string
  cover?: boolean
  onClick?: () => void
}

const ButtonAchor = ({ href, name, target, cover, onClick }: ButtonAchorProps) => {
  return (
    <AnchorLink href={href} target={target}>
      <button onClick={onClick}
        className={`text-base rounded-md border border-mainColor font-semibold px-4 py-2 overflow-hidden relative 
          ${
            cover ? "text-primaryBgColor bg-mainColor z-0 before:absolute before:top-2/4 before:left-2/4 before:-translate-x-2/4 before:-translate-y-2/4 before:-rotate-45 before:w-0 before:h-[350%] before:bg-primaryBgColor transition-colors before:duration-500 hover:before:w-full hover:text-mainColor before:-z-10 hover:border-white" : "z-0 text-mainColor before:absolute before:top-2/4 before:left-2/4 before:-translate-x-2/4 before:-translate-y-2/4 before:rotate-45 before:-z-20 before:w-0 before:h-[350%] before:bg-mainColor transition-colors before:duration-500 hover:before:w-full hover:border-white hover:text-white"
          }`}
      >
        {name}
      </button>
      </AnchorLink>
  );
};

export default ButtonAchor;
