import About from './about/_index';
import Header from './header/_index';
import News from './news/_index';
import Store from './store/_index';
import Timeline from './timeline/_index';

export default function App() {
   return (
      <div id='app'>
         <Header />
         <br />
         <News />
         <Store />
         <br />
         <About />
         <Timeline />
      </div>
   );
}
