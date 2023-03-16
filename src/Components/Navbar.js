import "../CSS/Navbar.css";
import { Link } from "react-router-dom";
import { AiOutlineLogout } from "react-icons/ai";
const Navbar = () => {
  return (
    <div>
      <nav className="main-nav">
        <div className="logo">
          <h2>
            <Link to="/home">
              <span>D</span>octorate
            </Link>
          </h2>
        </div>

        <div className="menu-link">
          <ul>
            <li>
              <Link to="/patients">Patients</Link>
            </li>
            {/* <li>
              <Link to="/messages">Messages</Link>
            </li> */}
            <li>
              <Link to="/appts">Appointments</Link>
            </li>
            <li>
              <Link to="/profile">Profile</Link>
            </li>
          </ul>
        </div>

        <div className="log-out">
          <Link to="/signin">
            <AiOutlineLogout className="logu" />
          </Link>
          {/* <a href="#" ><AiOutlineLogout className="logu"/></a>   */}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
