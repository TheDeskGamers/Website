import Game from './game/_index';

import store from '../../json/store.json';

export default function Store() {
   return (
      <>
         <div id='store'>
            <h2>Games</h2>
            <div id='grid'>
               {store.map(obj => (
                  <Game
                     title={obj.title}
                     img={obj.img}
                  />
               ))}
            </div>
         </div>
      </>
   );
}
