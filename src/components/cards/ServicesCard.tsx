import { IconBaseProps } from 'react-icons/lib'

interface ServicesCardProps {
  icon: IconBaseProps
  title: string
  content: string
}

const ServicesCard = ({ icon, title, content }: ServicesCardProps) => {
  return (
    <div className="bg-secondaryBgColor pt-7 pb-16 px-3 rounded-3xl text-center border-4 border-mainColor w-[30%] items-center flex flex-col hover:bg-mainColor/25 transition-colors hover:scale-105">
      <div className="text-mainColor font-bold">
        <>{icon}</>
      </div>
      <h3 className="mt-5 font-bold text-2xl">{title}</h3>
      <p className="mt-5">{content}</p>
    </div>
  )
}

export default ServicesCard
