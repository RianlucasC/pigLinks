
const LinkSocial = ({id, text, src , url}) => {
  return (
    <a href={url} target="_blank" className="flex justify-center items-center font-bold shadow-shadowLive py-3 px-7 rounded-lg relative w-full m-3  bg-grayLive hover:bg-linkHover">
        <img src={`../../public/${src}.svg`} alt={text}  className=" w-9 absolute left-4"/>
        <span className="text-2xl text-whiteText">{text}</span>
    </a>
  )
}

export default LinkSocial