import Link from 'next/link'

interface SocialMediaPorps {
  icon: any
  href: string
}

const SocialMedia = ({ icon, href }: SocialMediaPorps) => {
  return (
    <Link
      href={href}
      target="_blank"
      className="relative flex justify-center items-center w-10 h-10 bg-transparent border-2 z-10 border-mainColor text-mainColor rounded-[50%] overflow-hidden before:absolute before:top-2/4 before:left-2/4 before:-translate-x-2/4 before:-translate-y-2/4 before:-z-20 before:w-0 before:h-[350%] before:bg-mainColor transition-colors before:duration-500 hover:before:w-full hover:text-textColor hover:border-textColor"
    >
      {icon}
    </Link>
  )
}

export default SocialMedia
