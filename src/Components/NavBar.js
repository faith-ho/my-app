import { Outlet, Link } from "react-router-dom";
import "./NavBar.css";
import { StyledNavBar } from "../Styles/NavBar.styled";

const HeaderLink = ({ link }) => {
  const title = link.charAt(0).toUpperCase() + link.slice(1);

  return (
    <Link to={`/${link}`} class="headerlink-title">
      {title}
    </Link>
  );
};

const navBar = () => {
  return (
    <div className="headerWide">
      <StyledNavBar>
        <HeaderLink link="home" />
        <HeaderLink link="about" />
        <HeaderLink link="CV" />
        <HeaderLink link="contact" />
        <HeaderLink link="to-Do" />
        <HeaderLink link="counter" />
        <HeaderLink link="product" />
      </StyledNavBar>
      <Outlet />
    </div>
  );
};

export default navBar;
