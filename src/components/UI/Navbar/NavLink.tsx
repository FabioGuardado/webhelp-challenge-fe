import { Link } from 'react-router-dom';

type Props = {
  to: string;
  children: string;
};

const NavLink = ({ to, children }: Props) => {
  return (
    <Link
      to={to}
      style={{ fontWeight: 600, textDecoration: 'none', color: 'black' }}
    >
      {children}
    </Link>
  );
};

export default NavLink;
