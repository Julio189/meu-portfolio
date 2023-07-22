interface InputsProps {
  type: string
  placeholder?: string
  value: any
  onChange?: any
  button?: boolean
}

const Inputs: React.FC<InputsProps> = ({
  type,
  placeholder,
  value,
  onChange,
  button,
}) => {
  return (
    <div className={`${button ? '' : 'relative w-full my-2'}`}>
      <input
        className={`${
          button
            ? 'text-base rounded-md border border-mainColor font-semibold cursor-pointer overflow-hidden relative text-primaryBgColor bg-mainColor z-0 before:absolute before:top-2/4 before:left-2/4 before:-translate-x-2/4 before:-translate-y-2/4 before:-rotate-45 before:w-0 before:h-[350%] before:bg-primaryBgColor transition-colors before:duration-500 hover:before:w-full hover:text-textColor before:-z-10 hover:border-white px-4 py-2'
            : 'relative text-xs md:text-base w-full h-full p-4 text-white bg-transparent rounded-md border-2 border-[#20bbf8] outline-none placeholder:text-white hover:bg-[#112e42] transition peer'
        }`}
        value={value}
        type={type}
        onChange={onChange}
        placeholder=" "
        required
      />
      <label className="absolute text-sm text-white duration-150 transform -translate-y-3 scale-75 top-[10px] z-10 origin-[0] left-5 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3">
        {placeholder}
      </label>
    </div>
  )
}

export default Inputs
