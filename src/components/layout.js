import { Link } from "react-router-dom";

export function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-white border-bottom box-shadow">
      <div className="container">
        <Link className="navbar-brand" href="/home">
          <img src="./logo1.png" alt="...." width="50" className="me-2" />
          VJ AND RPG SHOPPY
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link
                className="nav-link text-dark"
                aria-current="page"
                to="/home"
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-dark" to="/contact">
                Contact
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link text-dark"
                aria-current="page"
                to="/about"
              >
                About
              </Link>
            </li>
          </ul>

          <ul className="navbar-nav">
            <li className="nav-item dropdown">
              {/* //eslint-disable-next-line */}
              <Link
                className="nav-link dropdown-toggle text-dark"
                to=""
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Admin
              </Link>
              <ul className="dropdown-menu">
                <li>
                  <Link className="dropdown-item" to="/admin/products">
                    Product
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/profile">
                    Profile
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
