import {
  Routes,
  Route,
  Navigate,
  useNavigate,
  useLocation,
} from "react-router-dom";

import { history } from "./Login/Helpers";
import { Nav, PrivateRoute } from "./Login/Components";
import { Home } from "./Home/Pages/Home";
import { Login } from "./Login/Pages/Login";

import { UserEvents } from "Resident/Pages/Events";
import { UserRequests } from "Resident/Pages/Requests";
import { UserAmenities } from "Resident/Pages/Amenities";

export { App };

function App() {
  // init custom history object to allow navigation from
  // anywhere in the react app (inside or outside components)
  history.navigate = useNavigate();
  history.location = useLocation();

  return (
    <div className="app-container bg-light">
      <Nav />
      <div className="container pt-4 pb-4">
        <Routes>
          <Route
            path="/manage"
            element={
              <PrivateRoute>
                <Home />
              </PrivateRoute>
            }
          />
          <Route
            path="/events"
            element={
              <PrivateRoute>
                <UserEvents />
              </PrivateRoute>
            }
          />
          <Route
            path="/amenities"
            element={
              <PrivateRoute>
                <UserAmenities />
              </PrivateRoute>
            }
          />
          <Route
            path="/requests"
            element={
              <PrivateRoute>
                <UserRequests />
              </PrivateRoute>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<Navigate to="/manage" />} />
        </Routes>
      </div>
    </div>
  );
}
