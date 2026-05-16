import { Link, useLocation } from 'react-router-dom';

const Navbar: React.FC = () => {
  const location = useLocation();

  return (
    <header className="header">
      <div className="logo">
        <Link to="/">Gopi Rayini</Link>
      </div>
      <nav className="nav">
        <Link 
          to="/" 
          className={location.pathname === '/' ? 'active' : ''}
        >
          Home
        </Link>
        <Link 
          to="/nas" 
          className={location.pathname === '/nas' ? 'active' : ''}
        >
          NAS
        </Link>
        <Link 
          to="/projects" 
          className={location.pathname === '/projects' ? 'active' : ''}
        >
          Projects
        </Link>
      </nav>
    </header>
  );
};

export default Navbar;
