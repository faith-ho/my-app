import { Outlet, Link } from 'react-router-dom';
import './NavBar.css';

const HeaderLink = ({ link }) => {
    const title = link.charAt(0).toUpperCase() + link.slice(1);
  
    return (
      <Link 
      to={`/${link}`} 
      className='headerlink-title'
      >
      {title}
    </Link>
    )
  };
  
  const navBar = () => {

    return (
      <div className='headerWide'>
          <div className='header'>
            <HeaderLink link='home' />
            <HeaderLink link='about' />
            <HeaderLink link='CV' />
            <HeaderLink link='contact' />
            <HeaderLink link='to-Do' />
      </div>
      <Outlet />
      </div>
    );
  };

  export default navBar;
