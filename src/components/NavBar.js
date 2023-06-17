/* eslint-disable */
import { CgProfile } from 'react-icons/cg';
import NavItem from './NavItem';

const NavBar = () => (
  <nav className="navContainer">
    <div className="navDiv">
      <h1 className="title">Bookstore CMS</h1>
      <NavItem />
    </div>
    <span>
      <CgProfile className="profileImg" />
    </span>
  </nav>
);

export default NavBar;
