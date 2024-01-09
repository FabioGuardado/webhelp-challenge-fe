import Navbar from '../Navbar/Navbar';

type Props = {
  children: React.ReactElement;
};

const Layout = ({ children }: Props) => {
  return (
    <div>
      <Navbar />
      {children}
    </div>
  );
};

export default Layout;
