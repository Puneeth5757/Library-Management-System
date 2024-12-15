    import { Link } from "react-router-dom";

    function Navbar() {
        return (
          <nav className="navbar fixed-top navbar-light navbg">
            <Link to="/" className="navbar-brand mx-3">
              <b style={{color:"white"}}>LMS</b>
            </Link>
            <div className="ml-auto d-flex">
              <Link to="/about" className="nav-link mx-2">
                About
              </Link>
              <Link to="admin-login" className="nav-link mx-2">
                AdminLogin
              </Link>
              <Link to="/login" className="nav-link mx-2">
                Login
              </Link>
            </div>
          </nav>
        );
      }
      
      export { Navbar };
