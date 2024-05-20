import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "../Pages/Dashboard";
import Login from "../Pages/Login";

const AdminRoutes = () => {
  return (
    <Router>
      {/* <Nav /> */}
      <Routes>
        <Route path="/admin" element={<Login />} />
        <Route path="/admin/dashboard" element={<Dashboard />} />
        {/* <Route path="/home" element={<Subscribe />} /> */}
      </Routes>
      {/* <Footer /> */}
    </Router>
  );
};

export default AdminRoutes;
