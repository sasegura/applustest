import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import App from "../App";
import Products from "../pages/Products";
import { useSelector } from "react-redux";
import Logout from "../pages/Logout";
import Login from "../pages/Login";
import Layout from "./layout";
import Cart from "../pages/Cart";
import Register from "../pages/Register";

const RoutesApp = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<App />} />
          <Route path="/login" element={<Login />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="/products"
            element={
              <RequireAuth>
                <Products />
              </RequireAuth>
            }
          />
          <Route
            path="/cart"
            element={
              <RequireAuth>
                <Cart />
              </RequireAuth>
            }
          />
          {/* <Route path="*" element={<NoMatch />} /> } */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
export default RoutesApp;

function RequireAuth({ children }) {
  const state = useSelector((state) => state);

  let location = useLocation();

  if (!state.userReducer.isloggedIn) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
}
