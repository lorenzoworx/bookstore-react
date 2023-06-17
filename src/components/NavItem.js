import { NavLink } from 'react-router-dom';

const NavItem = () => (
  <ul className="navLinks">
    <NavLink to="/">Books</NavLink>
    <NavLink className="categoryLink" to="/categories">Categories</NavLink>
  </ul>
);
export default NavItem;
