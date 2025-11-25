import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './index.css'
import './output.css';
import LandingPage from './pages/User/LandingPage';
import Login from './pages/User/LoginPage/Login';
import Earn from "./pages/User/Earn";
import Profile from "./pages/User/Passenger/Profile";
import About from "./pages/User/About";
import Help from "./components/User/Passenger/Help";
import Notification from "./components/User/Passenger/Notification";
import Payments from "./components/User/Passenger/Payments";
import RideFlow from "./components/User/Passenger/RideFlow";
// ... imports

// ... inside Routes
<Route path="/ride" element={<RideFlow />} />
import Profileinformation from "./pages/User/Passenger/Profileinformation";
import Coupon from "./pages/User/Passenger/Coupon";
import Security from "./pages/User/Security";
import History from "./pages/User/Passenger/History";
import Previous from "./components/User/Passenger/Previous";


function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="*" element={<LandingPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/ride" element={<RideFlow />} />
          <Route path="/earn" element={<Earn />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/about" element={<About />} />
          <Route path="/help" element={<Help />} />
          <Route path="/profileinformation" element={<Profileinformation />} />
          <Route path="/coupon" element={<Coupon />} />
          <Route path="/security" element={<Security />} />
          <Route path="/history" element={<History />} />
          <Route path="/previous" element={<Previous />} />
          <Route path="/notifications" element={<Notification />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
