import { IconBaseProps } from 'react-icons/lib'

interface ServicesCardProps {
  icon: IconBaseProps
  title: string
  content: string
}

const ServicesCard = ({ icon, title, content }: ServicesCardProps) => {
  return (
    <div className="bg-secondaryBgColor pt-4 sm:pt-7 pb-10 sm:pb-16 px-3 rounded-3xl text-center border-4 border-mainColor min-w-[33%] items-center flex flex-col hover:bg-mainColor/25 transition duration-500 hover:scale-105">
      <div className="text-mainColor font-bold">
        <>{icon}</>
      </div>
      <h3 className="mt-2 sm:mt-5 font-bold text-lg sm:text-2xl">{title}</h3>
      <p className="text-sm sm:text-base mt-2 sm:mt-5">{content}</p>
    </div>
  )
}

export default ServicesCard
