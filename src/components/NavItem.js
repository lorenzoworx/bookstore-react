import { NavLink } from 'react-router-dom';

const NavItem = () => (
  <ul>
    <NavLink to="/">Books</NavLink>
    <NavLink to="/categories">Categories</NavLink>
  </ul>
);

export default NavItem;
