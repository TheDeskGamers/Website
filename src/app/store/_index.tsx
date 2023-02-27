import store from '../../assets/json/store.json';

import Game from '../../components/game';
import Wip from './wip';

export default function Store() {
   return (
      <>
         <div id='store'>
            <h2>Games</h2>
            <div id='grid'>
               {store.map(obj => (
                  <Game
                     name={obj.name}
                     ver={obj.ver}
                  />
               ))}
               <Wip />
            </div>
         </div>
      </>
   );
}
