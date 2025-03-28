import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../services/authService";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function SignupPage() {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [userRole, setUserRole] = useState("JobSeeker"); // Default value
    const navigate = useNavigate();

    const handleSignup = async (e) => {
        e.preventDefault();
        const response = await registerUser(username, email, password, userRole);

        if (!(response.success)) {
            alert(`Signup failed: ${response.error}`);
        }
    };

    return (
        <div className="d-flex flex-column min-vh-100">
            <Navbar />
            <div className="container mt-5">
                <h2>Sign Up</h2>
                <form onSubmit={handleSignup}>
                    <div className="mb-3">
                        <label className="form-label">Username</label>
                        <input type="text" className="form-control" value={username} onChange={(e) => setUsername(e.target.value)} required />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Email</label>
                        <input type="email" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} required />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Password</label>
                        <input type="password" className="form-control" value={password} onChange={(e) => setPassword(e.target.value)} required />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">User Role</label>
                        <select className="form-control" value={userRole} onChange={(e) => setUserRole(e.target.value)} required>
                            <option value="JobSeeker">Job Seeker</option>
                            <option value="Employer">Employer</option>
                        </select>
                    </div>
                    <button type="submit" className="btn btn-success">Sign Up</button>
                </form>
            </div>
        </div>
    );
}

export default SignupPage;
