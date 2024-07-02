import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark ps-2">
      <Link className="navbar-brand" to="/home"><img src=''></img></Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <Link className="nav-link text-light fw-bold" to="/home">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-light fw-bold" to="/about">About</Link>
          </li>
        </ul>
        <ul className='navbar-nav ms-auto'>
        <li className='nav-item pe-2'>
            <Link className='nav-link text-light fw-bold' to='/login'>Admin</Link>
          </li>
          </ul>
      </div>
    </nav>
  );
}

export default Navbar;
