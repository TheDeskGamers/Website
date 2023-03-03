import { useEffect, useState } from 'react';

export default function Game({ name, ver, platform }: { name: string; platform: string[]; ver: string }) {
   const [img, setImg] = useState(null!);

   let path = `../assets/db/${name}`;

   const loadImg = async () => {
      const { default: imgSrc } = await import(`${path}/icon.png`);

      setImg(imgSrc);
   };

   const download = () => {
      const url = `${path}/${name} ${ver} ${platform[0]}`;

      const link = document.createElement('a');
      link.href = url;
      link.download = 'app.apk';

      document.body.appendChild(link);

      link.click();

      document.body.removeChild(link);
   };

   useEffect(() => {
      if (!img) loadImg();
   }, []);

   return (
      <div
         className='game'
         title={name}>
         <img src={img} />
         <button onClick={download}>Download</button>
      </div>
   );
}
