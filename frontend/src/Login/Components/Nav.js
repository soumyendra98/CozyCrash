import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { authActions } from "../../Store/auth.slice";

export { Nav };

function Nav() {
  const authUser = useSelector((x) => x.auth.user);
  const dispatch = useDispatch();
  const logout = () => dispatch(authActions.logout());

  // only show nav when logged in
  if (!authUser) return null;
  if (authUser.user.isAdmin) {
    return (
      <nav className="navbar navbar-expand navbar-dark bg-dark">
        <div className="navbar-nav">
          <NavLink to="/" className="nav-item nav-link">
            Home
          </NavLink>
          <button onClick={logout} className="btn btn-link nav-item nav-link">
            Logout
          </button>
        </div>
      </nav>
    );
  } else {
    return (
      <nav className="navbar navbar-expand navbar-dark bg-dark">
        <div className="navbar-nav">
          <NavLink to="/events" className="nav-item nav-link">
            Events
          </NavLink>
          <NavLink to="/amenities" className="nav-item nav-link">
            Amenities
          </NavLink>
          <NavLink to="/requests" className="nav-item nav-link">
            Requests
          </NavLink>
          <button onClick={logout} className="btn btn-link nav-item nav-link">
            Logout
          </button>
        </div>
      </nav>
    );
  }
}
