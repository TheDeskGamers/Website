import Icon from './social';

import TikTok from './tiktok.png';

export default function Social() {
   return (
      <div id='social'>
         <Icon
            href='https://www.instagram.com/thedeskgamers'
            src='https://www.vectorlogo.zone/logos/instagram/instagram-icon.svg'
         />
         <Icon
            href='https://www.tiktok.com/@thedeskgamers'
            src={TikTok}
         />
         <Icon
            href='https://www.github.com/thedeskgamers'
            src='https://img.icons8.com/ios-glyphs/120/null/github.png'
         />
         <Icon
            href='https://discord.gg/vnG2mw3RNc'
            src='https://www.vectorlogo.zone/logos/discordapp/discordapp-tile.svg'
         />
      </div>
   );
}
