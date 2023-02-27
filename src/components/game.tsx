import { utils } from 'reactyio';

export default function Game({ name, ver }: { name: string; ver: string }) {
   let path = `../assets/db/${name}`;

   let icon = import(`${path}/icon.png`); // HERE

   return (
      <div
         className='game'
         title={name}>
         <img src={icon} />
         <button onClick={() => utils.Download(name, import(`${path}/${name} ${ver}/Android.apk`), 'apk');}>Download</button>
      </div>
   );
}
