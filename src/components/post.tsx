export default function Post({ title, date, link, desc }: { date: string; desc: string | null; link: string; title: string }) {
   return (
      <div className='post'>
         <div
            className='header'
            onClick={() => window.open(link)}>
            <span>{title}</span>
            <span>{date}</span>
         </div>
         {desc !== null ? <div>{desc}</div> : null}
      </div>
   );
}
