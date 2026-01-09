import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import StudentList from "./pages/StudentList";
import AddStudent from "./pages/AddStudent";
import EditStudent from "./pages/EditStudent";
import { isAuthenticated } from "./auth/authService";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" />} />

      <Route path="/login" element={<Login />} />

      <Route
        path="/students"
        element={isAuthenticated() ? <StudentList /> : <Navigate to="/login" />}
      />

      <Route
        path="/students/add"
        element={isAuthenticated() ? <AddStudent /> : <Navigate to="/login" />}
      />

      <Route
        path="/students/edit/:id"
        element={isAuthenticated() ? <EditStudent /> : <Navigate to="/login" />}
      />
    </Routes>
  );
}

export default App;
