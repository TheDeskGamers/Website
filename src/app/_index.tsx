import About from './about/_index';
import Header from './header/_index';
import Hr from './hr';
import News from './news/_index';
import Store from './store/_index';
import Timeline from './timeline/_index';

export default function App() {
   return (
      <div id='app'>
         <Header />
         <Hr />
         <News />
         <Store />
         <About />
         <Timeline />
      </div>
   );
}
