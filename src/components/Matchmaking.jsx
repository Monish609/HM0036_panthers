import React, { useState } from "react";

const Matchmaking = () => {
    const [isSearching, setIsSearching] = useState(false);

    const startMatchmaking = () => {
        setIsSearching(true);
        // Simulate matchmaking process
        setTimeout(() => {
            setIsSearching(false);
            alert("Match found! Starting quiz...");
        }, 3000);
    };

    return (
        <div className="p-6 bg-gray-50 min-h-screen">
            <h1 className="text-3xl font-bold text-gray-800 mb-6">Matchmaking</h1>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <p className="text-lg font-medium text-gray-700 mb-4">
                    {isSearching ? "Searching for a match..." : "Ready to compete?"}
                </p>
                <button
                    onClick={startMatchmaking}
                    className="bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600 transition"
                >
                    Start Matchmaking
                </button>
            </div>
        </div>
    );
};

export default Matchmaking;