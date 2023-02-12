import ReactDOM from 'react-dom/client';

import Ads from './_ads/_index';
import App from './app/_index';

import './index.scss';

ReactDOM.createRoot(document.querySelector('#root') as HTMLElement).render(
   <>
      <App />
      <Ads />
   </>
);
