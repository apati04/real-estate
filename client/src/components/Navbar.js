import React from "react";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-dark">
      <h1 className="navbar-brand">Welcome, Username</h1>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar" aria-controls="mobile-navbar" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbar">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item py-2">
            <button className="btn btn-danger">Sign Out</button>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
