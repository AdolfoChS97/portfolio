import type { LinksFunction } from "@remix-run/node";
import NavBarStyles from "../assets/styles/Navbar.css";
import ImageResource from "../assets/images/cyber.png";

export const links: LinksFunction = () => {
  return [
    { rel: "stylesheet", href: ImageResource },
    { rel: "stylesheet", href: NavBarStyles },
  ];
};

const navBarStyle = {
  display: "flex",
  justifyContent: "space-between",
  background: "#ffffff",
  alignItems: "center",
};

const imageStyle = {
  borderRadius: "50%",
  width: "13%",
  marginLeft: "3.5%",
  marginRight: "3%",
};

const divStyle = {
  display: "flex",
  alignItems: "center",
  margin: "0.7rem",
};

function ImageComponent() {
  return (
    <div style={divStyle}>
      <img src={ImageResource} alt="It's me!" style={imageStyle} />
      <div>
        <b>Adolfo Chafardett</b>
      </div>
    </div>
  );
}

function Links() {
  const linkProperties = { margin: "3.5%" };

  return (
    <>
      <div style={linkProperties}>home</div>
      <div style={linkProperties}>about</div>
      <div style={linkProperties}>career</div>
      <div style={linkProperties}>contact</div>
    </>
  );
}

function NavBar() {
  return (
    <div style={navBarStyle}>
      <ImageComponent />
      <Links />
    </div>
  );
}

export default NavBar;
