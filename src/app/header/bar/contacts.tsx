import Social from '../../../components/social';

import social from '../../../assets/json/social.json';

export default function Contacts() {
   return (
      <div id='contacts'>
         {social.map(obj => (
            <Social
               link={obj.link}
               icon={obj.icon}
            />
         ))}
      </div>
   );
}
