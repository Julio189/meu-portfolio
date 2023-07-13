interface InputsProps {
  type: string
  placeholder: string
  id: string
}

const Inputs: React.FC<InputsProps> = ({ type, placeholder, id }) => {
  return (
    <div className="relative w-full md:w-[49%] my-2">
      <input
        id={id}
        type={type}
        placeholder=" "
        required
        className="relative text-xs md:text-base w-full h-full p-4 text-white bg-transparent rounded-md border-2 border-[#20bbf8] outline-none placeholder:text-white hover:bg-[#112e42] transition peer"
      />
      <label
        className="absolute text-sm text-white duration-150 transform -translate-y-3 scale-75 top-[10px] z-10 origin-[0] left-5 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3"
        htmlFor={id}
      >
        {placeholder}
      </label>
    </div>
  )
}

export default Inputs
