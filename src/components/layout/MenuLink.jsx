import { NavLink } from 'react-router-dom';

function MenuLink({ e }) {
  return (
    <NavLink className='text-decoration-none' to={e.link}>
      {e.name}
    </NavLink>
  );
}

export default MenuLink;
