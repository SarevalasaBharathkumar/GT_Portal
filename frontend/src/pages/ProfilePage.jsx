import { useEffect, useState } from "react";
import Navbar from "../components/Navbar"; // Import Navbar

function ProfilePage() {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [avatar, setAvatar] = useState(null); // For profile picture preview

    useEffect(() => {
        const fetchUser = async () => {
            const token = localStorage.getItem("token");
    
            if (!token) {
                setError("User not logged in");
                setLoading(false);
                return;
            }
    
            try {
                const response = await fetch("https://secure-fireworks-ad3f3462ec.strapiapp.com/api/users/me", {
                    method: "GET",
                    headers: {
                        "Authorization": `Bearer ${token}`,
                        "Content-Type": "application/json",
                    },
                });
    
                if (!response.ok) {
                    throw new Error("Failed to fetch user details");
                }
    
                const data = await response.json();
                setUser(data);
                localStorage.setItem("user", JSON.stringify(data));  // Store user data
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };
    
        fetchUser();
    }, []);
    
    const handleAvatarChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            const imageURL = URL.createObjectURL(file);
            setAvatar(imageURL);
        }
    };

    if (loading) return <p className="text-center mt-5">Loading...</p>;
    if (error) return <p className="text-danger text-center mt-5">{error}</p>;

    return (
        <>
            <Navbar /> {/* Include Navbar */}
            <div className="container d-flex flex-column align-items-center justify-content-center mt-5">
                <div className="card p-4 text-center" style={{ width: "400px" }}>
                    
                    {/* Profile Avatar */}
                    <div className="profile-avatar mb-3">
                        <img 
                            src={avatar || "https://via.placeholder.com/150"} 
                            alt="Profile" 
                            className="rounded-circle" 
                            style={{ width: "120px", height: "120px", objectFit: "cover", border: "2px solid gray" }} 
                        />
                    </div>

                    {/* Upload Photo Button */}
                    <label className="btn btn-outline-primary mb-3">
                        Upload Photo
                        <input type="file" hidden accept="image/*" onChange={handleAvatarChange} />
                    </label>

                    {/* User Details */}
                    <h4>{user.username}</h4>
                    <p><strong>Email:</strong> {user.email}</p>
                    <p><strong>Role:</strong> {user.UserRole || "N/A"}</p>
                </div>
            </div>
        </>
    );
}

export default ProfilePage;
