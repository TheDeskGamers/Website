import { useEffect } from 'react';

// import About from './about/_index';
import Header from './header/_index';
import News from './news/_index';
import Store from './store/_index';
// import Timeline from './timeline/_index';

export default function App() {
   useEffect(() => {
      window.addEventListener('blur', () => document.title = 'The Desk Gamers');
      window.addEventListener('focus', () => document.title = 'Home');
   });

   return (
      <div id='app'>
         <Header />
         <News />
         <Store />
      </div>
   );
}
