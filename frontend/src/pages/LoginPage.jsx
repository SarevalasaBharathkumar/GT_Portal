import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../services/authService";
import Navbar from "../components/Navbar";

function LoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        const response = await loginUser(email, password);

        if (response.success) {
            navigate("/applyjob"); // Redirect on success
        } else {
            alert(`Login failed: ${response.error}`);
        }
    };

    return (
        <div className="d-flex flex-column min-vh-100">
            <Navbar />
            <div className="container mt-5 d-flex justify-content-center">
                <div className="card p-4 shadow-lg" style={{ width: "350px" }}>
                    <h2 className="text-center mb-4">Login</h2>
                    <form onSubmit={handleLogin}>
                        <div className="mb-3">
                            <label className="form-label">Email</label>
                            <input type="email" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} required />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Password</label>
                            <input type="password" className="form-control" value={password} onChange={(e) => setPassword(e.target.value)} required />
                        </div>
                        <button type="submit" className="btn btn-primary w-100">Login</button>
                    </form>
                    <div className="mt-3 text-center">
                        <p>Don't have an account? <span className="text-primary" style={{ cursor: "pointer" }} onClick={() => navigate("/signup")}>Sign up</span></p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LoginPage;
