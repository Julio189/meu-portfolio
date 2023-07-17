import { BiLinkExternal } from 'react-icons/bi'
import Image from 'next/image'
import Link from 'next/link'

interface ProjectCardProps {
  src: string
  alt: string
  title: string
  content: string
  href: string
  cover?: boolean
}

const ProjectCard = ({
  src,
  alt,
  title,
  content,
  href,
  cover,
}: ProjectCardProps) => {
  return (
    <div className="relative rounded-2xl shadow shadow-primaryBgColor overflow-hidden flex group">
      <Image
        className="transition duration-500 hover:scale-110"
        src={src}
        alt={alt}
        width={600}
        height={340}
      />
      <div
        className={`absolute bottom-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-mainColor flex flex-col items-center justify-center px-8 text-center transition duration-500 group-hover:translate-y-0 ${
          cover ? 'translate-y-0' : 'translate-y-full'
        }`}
      >
        <h4 className="text-3xl sm:text-3xl md:text-2xl font-bold">{title}</h4>
        <p className="text-base py-4 text-start overflow-hidden">{content}</p>
        <Link
          className="inline-flex justify-center items-center w-12 h-12 sm:w-12 md:w-10 sm:h-12 md:h-10 rounded-full bg-textColor mb-3"
          href={href}
        >
          <BiLinkExternal className="text-primaryBgColor" size={20} />
        </Link>
      </div>
    </div>
  )
}

export default ProjectCard
