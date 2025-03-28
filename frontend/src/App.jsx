import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { useState, useEffect } from "react";
import LandingPage from "./pages/LandingPage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import Dashboard from "./pages/Dashboard";
import "./App.css";
import ProfilePage from "./pages/ProfilePage";
import JobPosting from "./pages/JobPosting";
import ApplyJob from "./pages/ApplyJob";


function ProtectedRoute({ element }) {
    const token = localStorage.getItem("token");
    return token ? element : <Navigate to="/login" replace />;
}

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/signup" element={<SignupPage />} />
                <Route path="/dashboard" element={<ProtectedRoute element={<Dashboard />} />} />
                <Route path="/profile" element={<ProtectedRoute element={<ProfilePage/>}/>}/>
                <Route path="/postjob" element={<ProtectedRoute element={<JobPosting/>}/>}/>
                <Route path="/applyjob" element={<ProtectedRoute element={<ApplyJob/>}/>}/>
                
            </Routes>
        </Router>
    );
}

export default App;