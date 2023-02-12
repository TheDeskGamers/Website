export default function Social({ link, icon }: { link: string; icon: string }) {
   return (
      <a href={link} className='social'>
         <img src={icon} />
      </a>
   );
}
