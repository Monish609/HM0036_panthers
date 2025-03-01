import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-6">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">Welcome to EduPlatform</h1>
            <p className="text-lg text-gray-600 mb-8">
                Your one-stop solution for interactive learning, quizzes, and mentorship.
            </p>
            <div className="flex space-x-4">
                <Link
                    to="/login"
                    className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition"
                >
                    Login
                </Link>
                <Link
                    to="/signup"
                    className="bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600 transition"
                >
                    Sign Up
                </Link>
            </div>
        </div>
    );
};

export default Home;