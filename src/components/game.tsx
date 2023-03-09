import { useEffect, useState } from 'react';
import JSZip from 'jszip';

export default function Game({ name, ver, platform }: { name: string; platform: string[]; ver: string }) {
   const [img, setImg] = useState(null!);

   let path = `../assets/db/${name}`;

   const loadImg = async () => {
      const { default: imgSrc } = await import(`${path}/icon.png`);

      setImg(imgSrc);
   };

   const download = async () => {
      let path = `./assets/db/${name}/${name} ${ver} ${platform}`;

      let zip = new JSZip();

      let files = await window.fetch(encodeURIComponent(path));

      zip.file(path, await files.arrayBuffer());

      let blob = await zip.generateAsync({ type: 'blob' });

      const link = document.createElement('a');
      
      link.href = path;

      link.download = 'Download.apk';

      link.click();
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
