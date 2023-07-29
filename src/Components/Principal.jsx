import LinkSocial from "./LinkSocial"

const links = [
  {
    'id': 'Instagram',
    'text': 'Instagram',
    'src': 'https://upload.wikimedia.org/wikipedia/commons/e/e7/Instagram_logo_2016.svg',
    'url': 'https://www.instagram.com/eupiguinho/',
  },
  {
    'id': 'Twitter',
    'text': 'Twitter',
    'src': 'https://upload.wikimedia.org/wikipedia/commons/6/6f/Logo_of_Twitter.svg',
    'url': 'https://twitter.com/eupiguinho',
  },
  {
    'id': 'Youtube',
    'text': 'Piguinho',
    'src': 'https://www.svgrepo.com/show/13671/youtube.svg',
    'url': 'https://www.youtube.com/piguinho1',
  },
  {
    'id': 'Tiktok',
    'text': 'Tiktok',
    'src': 'https://seeklogo.com/images/T/tiktok-icon-logo-1CB398A1BD-seeklogo.com.png',
    'url': 'https://www.tiktok.com/@cortesdopig',
  },
  {
    'id': 'Discord',
    'text': 'Discord da live',
    'src': 'https://www.svgrepo.com/show/353655/discord-icon.svg',
    'url': 'https://discord.com/invite/DU8HCXr5C4',
  },
  
]

const Principal = () => {
  return (
    <main className="w-screen  flex items-center flex-col ">
        <img src="../../public/pigFace.png" alt="caricatura" className="w-[125px] py-4"/>
        <section className="text-whiteText w-11/12 max-w-2xl" >
          {links.map(({id, text, src, url}) => <LinkSocial id={id} text={text} src={src} url={url}/>)}
        </section>
    </main>
  )
}

export default Principal