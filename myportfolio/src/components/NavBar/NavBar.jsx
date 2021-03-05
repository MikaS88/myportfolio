import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./style.css";

const NavBar = () => {
  const [open, setOpen] = useState(false);
  const [screenWidth, setScreenWidth] = useState(0);
  const location = useLocation();

  const trackScreenWidth = () => {
    const width = window.innerWidth;
    setScreenWidth(width);
    if (width > 600) {
      setOpen(true);
    }
  };

  const handleClose = () => {
    if (screenWidth < 600) {
      setOpen(false);
    }
  };

  useEffect(() => {
    trackScreenWidth();
    window.addEventListener("resize", trackScreenWidth);
    return () => window.removeEventListener("resize", trackScreenWidth);
  }, []);

  return (
    <nav className="navbar">
      <div className="nav-wrapper">
        <div className="logo">
          <h3>My Portfolio</h3>
        </div>
        <div className="list-wrapper">
          <ul style={{ left: open ? "0" : "-100vw" }}>
            <li>
              <Link
                to="/"
                onClick={handleClose}
                style={{ color: location.pathname === "/" && "	#eb148d" }}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                onClick={handleClose}
                style={{ color: location.pathname === "/about" && "	#eb148d" }}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/skills"
                onClick={handleClose}
                style={{ color: location.pathname === "/skills" && "	#eb148d" }}
              >
                Skills
              </Link>
            </li>
            <li>
              <Link
                to="/cv"
                onClick={handleClose}
                style={{ color: location.pathname === "/works" && "	#eb148d" }}
              >
                CV
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                onClick={handleClose}
                style={{ color: location.pathname === "/contact" && "	#eb148d" }}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
