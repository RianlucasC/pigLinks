import LinkSocial from "./LinkSocial"

const links = [
  {
    'id': 'Instagram',
    'text': 'Instagram',
    'src': 'instagramSvg',
    'url': 'https://www.instagram.com/eupiguinho/',
  },
  {
    'id': 'Twitter',
    'text': 'Twitter',
    'src': 'twitterSvg',
    'url': 'https://twitter.com/eupiguinho',
  },
  {
    'id': 'Youtube',
    'text': 'Piguinho',
    'src': 'youtubeSvg',
    'url': 'https://www.youtube.com/piguinho1',
  },
  {
    'id': 'Tiktok',
    'text': 'Tiktok',
    'src': 'tiktokSvg',
    'url': 'https://www.tiktok.com/@cortesdopig',
  },
  {
    'id': 'Discord',
    'text': 'Discord da live',
    'src': 'discordSvg',
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