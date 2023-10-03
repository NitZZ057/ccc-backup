import { Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import AOS from "aos";
import "./App.css";
import "./css/style.css";
import "./css/css2.css";
import "./css/about.css";

//Pages
import HomePage from "./pages/Home";
import ProtectedRoute from "./components/Routes/ProtectedRoute";
import AdminRoute from "./components/Routes/AdminRoutes";
import Login from './pages/Auth/Login'
import Potd from "./pages/Potd";
import DashBoard from "./pages/Admin/DashBoard";
import QuestionForm from "./pages/Admin/QuestionForm";
import EventForm from "./pages/Admin/EventForm";
import Pnf from "./pages/Pnf";
import Signup from "./pages/Auth/Signup";
import HallOfFame from "./pages/HallOfFame";
import ForgotPassword from "./pages/Auth/ForgotPassword";
import ResetPassword from "./pages/Auth/ResetPassword";
import PastEvent from "./pages/Admin/PastEvent";
import Events from "./pages/Events"
import AddHof from './pages/Admin/AddHOF'

function App() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* <Route path="/about" element={<AboutPage />} /> */}
        <Route path="/events" element={<Events />} />
        <Route path="/hall-of-fame" element={<HallOfFame />} />
        <Route path="/events" element={<Events />} />
        <Route path="/protected" element={<ProtectedRoute />} >
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
          <Route path="forgot-password" element={<ForgotPassword />} />
          <Route path="reset-password/:id" element={<ResetPassword />} />
        </Route>
        <Route path="/admin" element={<AdminRoute />} >
          <Route path="dashboard" element={<DashBoard />} />
          <Route path="add-que" element={<QuestionForm />} />
          <Route path="add-event" element={<EventForm />} />
          <Route path="add-pastEve" element={<PastEvent />} />
          <Route path="add-hofDetails" element={<AddHof />} />
        </Route>
        <Route path="/potd" element={<Potd />} />
        <Route path="/*" element={<Pnf />} />
        {/* </Route> */}
      </Routes>
    </div>
  );
}

export default App;
