import { BiLinkExternal } from 'react-icons/bi'
import Image from 'next/image'
import Link from 'next/link'

interface ProjectCardProps {
  src: string
  alt: string
  title: string
  content: string
  href: string
}

const ProjectCard = ({ src, alt, title, content, href }: ProjectCardProps) => {
  return (
    <div className="relative rounded-2xl shadow shadow-primaryBgColor overflow-hidden flex group">
      <Image
        className="transition duration-500 hover:scale-110"
        src={src}
        alt={alt}
        width={600}
        height={340}
      />
      <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-mainColor flex flex-col items-center justify-center px-8 text-center translate-y-full transition duration-500 group-hover:translate-y-0">
        <h4 className="text-4xl font-bold">{title}</h4>
        <p className="text-base mt-5 mb-2">{content}</p>
        <Link
          className="inline-flex justify-center items-center w-12 h-12 rounded-full bg-textColor"
          href={href}
        >
          <BiLinkExternal className="text-primaryBgColor" size={20} />
        </Link>
      </div>
    </div>
  )
}

export default ProjectCard
