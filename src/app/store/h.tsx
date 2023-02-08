import Game from './game/_index';

export default function Title() {
   return (
      <div>
         <h2>Games</h2>
         <div>
            <Game />
            <Game />
            <Game />
         </div>
      </div>
   );
}