import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Welcome from "./pages/welcome";
import Signup from "./pages/signUp/Signup";
import Login from "./pages/Login/Login";
import Dashboard from "./components/dashboard/Dashboard";

function App() {
  return (
    <BrowserRouter basename="/educase_internship_project">
      <Routes>
         <Route path="/" element={<Welcome />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />

      </Routes>
      <ToastContainer position="top-center" autoClose={1500} />
    </BrowserRouter>
  );
}

export default App;
