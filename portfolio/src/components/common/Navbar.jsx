import { NavLink } from 'react-router-dom';
import './navbar.css'

const Navbar = () => {
  return (
    <>
      {/* <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
        <li>
          <NavLink to="/services">Services</NavLink>
        </li>
        <li>
          <NavLink to="/contact">Contact</NavLink>
        </li>
      </ul> */}

      {/* HEADER=SECTION=START */}
      <section id="header-section">
        <div className="container-fluid p-0">
          <nav className="navbar navbar-expand-lg navbar-dark">
            <div className="container-xxl">
              <a className="navbar-brand" to="#">
                <img
                  src="/images/LOGO_BLACK.png"
                  width={100}
                  alt=""
                />
              </a>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon" />
              </button>
              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav m-auto mb-2 mb-lg-0">
                  <li className="nav-item pe-3">
                    <NavLink className="nav-link" aria-current="page" to="/">
                      Home
                    </NavLink>
                  </li>
                  <li className="nav-item pe-3">
                    <NavLink className="nav-link" to="/about">
                      About
                    </NavLink>
                  </li>
                  <li className="nav-item pe-3">
                    <NavLink className="nav-link" to="/contact">
                      Contact
                    </NavLink>
                  </li>
                  <li className="nav-item pe-3">
                    <NavLink className="nav-link" to="/services">
                      Service
                    </NavLink>
                  </li>
                </ul>
                <div className="call_div me-xxl-5">
                  <p className="mb-0">
                    {" "}
                    <span>Call Me:</span> (0312)-4590772
                  </p>
                </div>
               
                {/* <div className="call_div ms-xxl-5">
                  <img src="/images/navbar-vector.png" alt="" />
                </div> */}
              </div>
            </div>
          </nav>
        </div>
      </section>
      {/* HEADER=SECTION=END */}
    </>
  );
};

export default Navbar;
