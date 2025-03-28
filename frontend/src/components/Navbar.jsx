import { Link, useNavigate } from "react-router-dom";
import { logoutUser } from "../services/authService";
import { useState, useEffect } from "react";

function Navbar() {
    const navigate = useNavigate();
    const token = localStorage.getItem("token");
    const [userRole, setUserRole] = useState(null);
    const [showDropdown, setShowDropdown] = useState(false);
    const [showNavMenu, setShowNavMenu] = useState(false); // Controls floating menu visibility

    useEffect(() => {
        const storedUser = localStorage.getItem("user");
        if (storedUser) {
            try {
                const parsedUser = JSON.parse(storedUser);
                setUserRole(parsedUser?.UserRole || "N/A");
            } catch (error) {
                console.error("Error parsing user data:", error);
            }
        }
    }, []);

    const handleLogout = () => {
        logoutUser();
        localStorage.removeItem("user");
        navigate("/");
    };

    return (
        <nav className="navbar navbar-dark bg-dark px-3">
            <div className="container-fluid d-flex justify-content-between align-items-center">
                {/* Navbar Brand */}
                <Link className="navbar-brand fw-bold" to="/" style={{ fontSize: "1.8rem" }}>
                    GT Portal
                </Link>

                {/* Full Navbar (Visible on Large Screens) */}
                <div className="d-none d-lg-flex">
                    <ul className="navbar-nav flex-row">
                        {token && (
                            <>
                                <li className="nav-item mx-3">
                                    <Link className="nav-link text-white" to="/dashboard">Dashboard</Link>
                                </li>
                                {userRole === "Employer" && (
                                    <li className="nav-item mx-3">
                                        <Link className="nav-link text-white" to="/postjob">Post a Job</Link>
                                    </li>
                                )}
                                <li className="nav-item mx-3">
                                    <Link className="nav-link text-white" to="/applyjob">Apply for Job</Link>
                                </li>
                            </>
                        )}
                    </ul>
                </div>

                {/* Profile Icon & Toggle Button (Visible Only on Small Screens) */}
                <div className="d-flex align-items-center">
                    {token && (
                        <div className="profile-container position-relative me-3" onClick={() => setShowDropdown(!showDropdown)}>
                            <div className="profile-circle">
                                <i className="bi bi-person"></i>
                            </div>

                            {showDropdown && (
                                <ul className="dropdown-menu show position-absolute end-0 mt-2 shadow-lg"
                                    style={{ right: 0, transform: "translateX(10%)" }}>
                                    <li>
                                        <Link className="dropdown-item" to="/profile">Profile</Link>
                                    </li>
                                    <li>
                                        <button className="dropdown-item text-danger" onClick={handleLogout}>Sign Out</button>
                                    </li>
                                </ul>
                            )}

                        </div>
                    )}

                    {/* Toggle Button (Visible Only on Small Screens) */}
                    <button
                        className="navbar-toggler d-lg-none"
                        type="button"
                        onClick={() => setShowNavMenu(!showNavMenu)}
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                </div>
            </div>

            {/* Floating Menu Card (Auto Width) */}
            {showNavMenu && (
                <div className="menu-card position-absolute top-100 end-0 p-3 bg-dark shadow-lg rounded d-lg-none"
                    style={{ width: "auto", minWidth: "150px", maxWidth: "300px", zIndex: 1000 }}>
                    <ul className="list-unstyled mb-0">
                        {token && (
                            <>
                                <li className="mb-2">
                                    <Link className="text-white text-decoration-none" to="/dashboard">Dashboard</Link>
                                </li>
                                {userRole === "Employer" && (
                                    <li className="mb-2">
                                        <Link className="text-white text-decoration-none" to="/postjob">Post a Job</Link>
                                    </li>
                                )}
                                <li className="mb-2">
                                    <Link className="text-white text-decoration-none" to="/applyjob">Apply for Job</Link>
                                </li>
                            </>
                        )}
                    </ul>
                </div>
            )}
        </nav>
    );
}

export default Navbar;
