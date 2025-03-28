const API_URL = "https://secure-fireworks-ad3f3462ec.strapiapp.com/api/auth/local";

// Login function
export async function loginUser(email, password) {
    try {
        const response = await fetch(API_URL, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ identifier: email, password }),
        });

        const data = await response.json();
        console.log("Login Response:", data);

        if (response.ok && data.jwt) {
            localStorage.setItem("token", data.jwt);
            return { success: true };
        } else {
            return { success: false, error: data.error?.message || "Login failed" };
        }
    } catch (error) {
        console.error("Login error:", error);
        return { success: false, error: "Something went wrong" };
    }
}

export async function registerUser(username, email, password, userRole) {
    try {
        const registerResponse = await fetch("https://secure-fireworks-ad3f3462ec.strapiapp.com/api/auth/local/register", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ username, email, password }),
        });

        const registerData = await registerResponse.json();
        console.log("Register Response:", registerData);

        if (!registerResponse.ok || !registerData.jwt) {
            return { success: false, error: registerData.error?.message || "Signup failed" };
        }

        const userId = registerData.user.id;
        const jwtToken = registerData.jwt;

        const updateResponse = await fetch(`https://secure-fireworks-ad3f3462ec.strapiapp.com/api/users/${userId}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${jwtToken}`,
            },
            body: JSON.stringify({ UserRole: userRole }),
        });

        const updateData = await updateResponse.json();
        console.log("Update Response:", updateData);

        if (!updateResponse.ok) {
            return { success: false, error: updateData.error?.message || "Failed to update UserRole" };
        }

        
        return { success: true };
    } catch (error) {
        console.error("Signup error:", error);
        return { success: false, error: "Something went wrong" };
    }
}

export function logoutUser() {
    localStorage.removeItem("token");
    window.location.href = "/";
}
