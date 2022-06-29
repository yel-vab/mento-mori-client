import logo from '../assets/logo.png';
import { Link } from 'react-router-dom';
import './components.css';

const Header = () => {
  return (
    <div className="container-header">
      <div className="container-logo">
        <img className="img-logo" src={logo} alt="" />
      </div>
      <nav className="container-menu">
        {/*<Link className="link-nav" to="/">
          Homepage
        </Link>*/}
        <Link className="link-nav" to="/">
          All Mentos
        </Link>
        <Link className="link-nav" to="/record-new-mento">
          Record New Mento
        </Link>
      </nav>
    </div>
  );
};

export default Header;
