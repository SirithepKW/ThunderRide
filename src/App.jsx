import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

// Pages
import Login from './pages/Admin/Login';
import DashboardPage from './pages/Admin/DashboardPage';
import LiveMapPage from './pages/Admin/LiveMapPage';

// Driver Pages
import DriverSetupPage from './pages/Admin/DriverSetupPage';
import AddDriverPage from './pages/Admin/AddDriverPage';
import EditDriverPage from './pages/Admin/EditDriverPage';
import IdentityRequestPage from './pages/Admin/IdentityRequestPage';

// Passenger Pages
import PassengerListPage from './pages/Admin/PassengerListPage';
import AddPassengerPage from './pages/Admin/AddPassengerPage';
import EditPassengerPage from './pages/Admin/EditPassengerPage';

import FareSetupPage from './pages/Admin/FareSetupPage';
import CouponSetupPage from './pages/Admin/CouponSetupPage';

import TransactionPage from './pages/Admin/TransactionPage';
import SafetyOverviewPage from './pages/Admin/SafetyOverviewPage';
import ChattingPage from './pages/Admin/ChattingPage';
import SettingsPage from './pages/Admin/SettingsPage';


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <Router>
      <Routes>
        {/* Login Route */}
        <Route
          path="/login"
          element={
            isLoggedIn ? <Navigate to="/dashboard" replace /> : <Login setIsLoggedIn={setIsLoggedIn} />
          }
        />

        {/* Protected Routes */}
        {isLoggedIn ? (
          <>
            {/* Default Route */}
            <Route path="/" element={<Navigate to="/dashboard" replace />} />

            {/* Main Routes */}
            <Route path="/dashboard" element={<DashboardPage />} />
            <Route path="/live-map" element={<LiveMapPage />} />

            {/* Driver Setup Routes */}
            <Route path="/driver-list" element={<DriverSetupPage />} />
            <Route path="/add-driver" element={<AddDriverPage />} />
            <Route path="/edit-driver" element={<EditDriverPage />} />
            <Route path="/identity-request" element={<IdentityRequestPage />} />

            {/* Passenger Setup Routes */}
            <Route path="/passenger-list" element={<PassengerListPage />} />
            <Route path="/add-passenger" element={<AddPassengerPage />} />
            <Route path="/edit-passenger" element={<EditPassengerPage />} />

            <Route path="/fare-setup" element={<FareSetupPage />} />
            <Route path="/coupon-setup" element={<CouponSetupPage />} />

            <Route path="/transaction" element={<TransactionPage />} />
            <Route path="/safety-overview" element={<SafetyOverviewPage />} />
            <Route path="/chatting" element={<ChattingPage />} />
            <Route path="/settings" element={<SettingsPage />} />



            {/* Catch all - redirect to dashboard */}
            <Route path="*" element={<Navigate to="/dashboard" replace />} />
          </>
        ) : (
          <>
            {/* Redirect all routes to login if not authenticated */}
            <Route path="*" element={<Navigate to="/login" replace />} />
          </>
        )}
      </Routes>
    </Router>
  );
}

export default App;