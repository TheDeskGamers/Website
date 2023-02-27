import logo from '../../assets/img/logo.png';

export default function Cred() {
   return (
      <div id='cred'>
         <div>
            <h1>The Desk Gamers</h1>
            <img src={logo} id='logo' />
         </div>
         <h5 id='desc'>We are two dudes making games</h5>
      </div>
   );
}
