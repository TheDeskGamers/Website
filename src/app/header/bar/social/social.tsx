export default function Icon({ href, src }: { href: string; src: string }) {
   return (
      <a href={href as string} className='icon'>
         <img src={src as string} />
      </a>
   );
}
