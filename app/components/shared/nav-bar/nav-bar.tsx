import { useState } from "react";
import { FaBars } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import ImageResource from "../../../assets/images/cyber.png";

function Hamburguer() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };
    
  return (
    <div className="nav-icon" onClick={toggleNav}>
      {isOpen ? <AiOutlineClose /> : <FaBars />}
    </div>
  );
}

function Image({ source, alt }: any) {
  return (
    <>
      <div className="nav-brand">
        <img className="nav-img" src={source} alt={alt} />
        <span className="nav-title nav-special">Adolfo Chafardett</span>
      </div>
    </>
      
  );
}

function Links() {
  return (
    <ul className="nav-links">
      <li className="link nav-special">home</li>
      <li className="link nav-special">about</li>
      <li className="link nav-special">career</li>
      <li className="link nav-special">contact</li>
    </ul>
  );
}

function NavBar() {
  return (
    <>
      <div className="nav-bar">
        <Image source={ImageResource} alt="It's me!" />
        <Links />
        <Hamburguer />
      </div>
    </>
  );
}

export default NavBar;
