import Desc from './desc';
import Logo from './logo';
import Title from './title';
import Bar from './bar/_index';

export default function Header() {
   return (
      <header>
         <Bar />
         <div id='cred'>
            <Title />
            <Logo />
         </div>
         <Desc />
      </header>
   );
}
