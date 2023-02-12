export default function Post({ title, date, desc }: { title: string; date: string; desc: string }) {
   return (
      <div className='post'>
         <div className='header'>
            <span>{title}</span>
            <span>{date}</span>
         </div>
         {desc !== null ? <div>{desc}</div> : null}
      </div>
   );
}
