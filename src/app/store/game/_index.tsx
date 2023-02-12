export default function Game({ title, img }: { title: string; img: string }) {
   return (
      <div className='game'>
         <img src={img} />
         <button>Download</button>
      </div>
   );
}
