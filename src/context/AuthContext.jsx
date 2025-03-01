import React, { createContext, useState, useEffect, useContext } from "react";
import axios from "axios";

// Create the AuthContext
export const AuthContext = createContext();

// AuthProvider component
export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null); // Store user data
    const [isLoading, setIsLoading] = useState(true); // Track loading state

    // Check if the user is logged in on initial load
    useEffect(() => {
        const checkAuth = async () => {
            try {
                const response = await axios.get("/api/auth/check", {
                    withCredentials: true, // Include cookies in the request
                });
                setUser(response.data.user); // Set user data if authenticated
            } catch (error) {
                setUser(null); // Clear user data if not authenticated
            } finally {
                setIsLoading(false); // Stop loading
            }
        };

        checkAuth();
    }, []);

    // Login function
    const login = async (email, password) => {
        try {
            const response = await axios.post("/api/auth/login", { email, password }, {
                withCredentials: true, // Include cookies in the request
            });
            setUser(response.data.user); // Set user data on successful login
        } catch (error) {
            throw error; // Throw error for handling in the UI
        }
    };

    // Logout function
    const logout = async () => {
        try {
            await axios.post("/api/auth/logout", {}, {
                withCredentials: true, // Include cookies in the request
            });
            setUser(null); // Clear user data on logout
        } catch (error) {
            console.error("Logout failed:", error);
        }
    };

    // Signup function
    const signup = async (email, password) => {
        try {
            const response = await axios.post("/api/auth/signup", { email, password }, {
                withCredentials: true, // Include cookies in the request
            });
            setUser(response.data.user); // Set user data on successful signup
        } catch (error) {
            throw error; // Throw error for handling in the UI
        }
    };

    // Provide the context value to all children
    const value = {
        user,
        isLoading,
        login,
        logout,
        signup,
    };

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
};

// Custom hook to use the AuthContext
export const useAuth = () => {
    return useContext(AuthContext);
};