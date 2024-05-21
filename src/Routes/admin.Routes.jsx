import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "../Pages/Dashboard";
import Login from "../Pages/Login";
import PrivateRoute, { LoginRoute } from "./private.Routes";

const AdminRoutes = () => {
  return (
    <BrowserRouter>
      {/* <Nav /> */}
      <Routes>
        <Route element={<LoginRoute />}>
          <Route path="/admin" element={<Login />} />
        </Route>
        <Route element={<PrivateRoute />}>
          <Route path="/admin/dashboard" element={<Dashboard />} />
        </Route>
        {/* <Route path="/home" element={<Subscribe />} /> */}
      </Routes>
      {/* <Footer /> */}
    </BrowserRouter>
  );
};

export default AdminRoutes;