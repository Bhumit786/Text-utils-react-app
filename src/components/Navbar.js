import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';
export default function Navbar(props) {
  return(
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
    <div className="container-fluid">
      <Link className="navbar-brand" to="/">{props.title}</Link>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="/Home">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/Aboutus">{props.aboutus}</Link>
          </li>
        </ul>
          <div className={`form-check form-switch text-${(props.mode==="dark")?"light":"dark"}`}>
          <input className="form-check-input" type="checkbox" onChange={props.togglemode} role="switch" id="flexSwitchCheckDefault"/>
          <label className="form-check-label" htmlFor='flexSwitchCheckDefault'>Dark Mode</label>
          </div>
      </div>
    </div>
  </nav>
  );
}

Navbar.propTypes = {
    title:PropTypes.string,
    aboutus:PropTypes.string
}