import ProfilePhoto from "./ProfilePhoto"
import FullName from './FullName'
import Navbar from "./Navbar";

import './Header.css'

function Header() {
  return (
    <header className="myheader">
        <ProfilePhoto />
         < FullName />
        <Navbar/>
       
    </header>
  );
}

export default Header;
