import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Link } from "react-router-dom";

const Navbar = () => {
    const { user, logout } = useContext(AuthContext);

    return (
        <nav className="bg-blue-200 p-4">
            <div className="container mx-auto flex justify-between items-center">
                <Link to="/" className="text-white text-xl font-bold">
                    EduPlatform
                </Link>
                <div className="space-x-4">
                    {user ? (
                        <>
                            <span className="text-white">Welcome, {user.email}</span>
                            <button
                                onClick={logout}
                                className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition"
                            >
                                Logout
                            </button>
                        </>
                    ) : (
                        <>
                            <Link to="/login" className="text-white hover:text-blue-200">
                                Login
                            </Link>
                            <Link to="/signup" className="text-white hover:text-blue-200">
                                Signup
                            </Link>
                        </>
                    )}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;