import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-6">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">404 - Page Not Found</h1>
            <p className="text-lg text-gray-600 mb-8">
                The page you're looking for does not exist.
            </p>
            <Link
                to="/"
                className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition"
            >
                Go Home
            </Link>
        </div>
    );
};

export default NotFound;