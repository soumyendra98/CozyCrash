import { Navigate, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

import { history } from "../Helpers/history";

export { PrivateRoute };

function PrivateRoute({ children }) {
  const { user: authUser } = useSelector((x) => x.auth);
  const location = useLocation();

  if (!authUser) {
    // not logged in so redirect to login page with the return url
    return <Navigate to="/login" state={{ from: history.location }} />;
  }
  if (authUser.user.isAdmin) {
    if (
      location.pathname === "/events" ||
      location.pathname === "/amenities" ||
      location.pathname === "/requests"
    ) {
      return <Navigate to="/manage" state={{ from: history.location }} />;
    }
    return children;
  } else {
    if (location.pathname === "/manage" || location.pathname === "/panel") {
      return <Navigate to="/events" state={{ from: history.location }} />;
    }
    return children;
  }
}
