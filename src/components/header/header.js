import React from 'react';
import {Link} from 'react-router-dom';
const Navbar = () => {
  return(
    <div className="container-fluid mb-10">
      <nav className="navbar navbar-expand-lg navbar-light bg-primary text-white">
  <Link className="navbar-brand" to="/">Snsys CRM</Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
    <li className="nav-item">
       <Link className="nav-link active" to="/">Home</Link>
      </li>
      <li className="nav-item">
       <Link className="nav-link" to="/login">Login</Link>
      </li>
      <li className="nav-item">
      <Link className="nav-link" to="/signup">Sign-Up</Link>
      </li>
     
   
    </ul>
    <form className="form-inline my-2 my-lg-0">
      <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
      <button className="btn btn-outline-danger my-2 my-sm-0 btn-raised" type="submit">Search</button>
    </form>
  </div>
</nav>
    </div>
  )
}
export default Navbar;