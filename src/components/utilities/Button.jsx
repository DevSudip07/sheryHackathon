const Button = ({onclick, style, title, icon}) => {
  return (
    <>
        <button onClick={onclick} className={`w-fit px-5 py-1 font-medium capitalize flex items-center gap-2 bg-linear-to-b from-[var(--primaryColor)] to-[#0d30dd] rounded-full ease-in duration-150 hover:cursor-pointer ${style}`}>{title} {icon}</button>
    </>
  )
}

export default Button