import React from "react";

const MentorMatching = () => {
    const mentors = [
        { id: 1, name: "John Doe", expertise: "React, Node.js" },
        { id: 2, name: "Jane Smith", expertise: "JavaScript, CSS" },
    ];

    return (
        <div className="p-6 bg-gray-50 min-h-screen">
            <h1 className="text-3xl font-bold text-gray-800 mb-6">Mentor Matching</h1>
            <div className="space-y-4">
                {mentors.map((mentor) => (
                    <div
                        key={mentor.id}
                        className="bg-white p-6 rounded-lg shadow-md flex justify-between items-center"
                    >
                        <div>
                            <p className="text-lg font-medium text-gray-700">{mentor.name}</p>
                            <p className="text-sm text-gray-500">{mentor.expertise}</p>
                        </div>
                        <button className="bg-purple-500 text-white px-4 py-2 rounded-lg hover:bg-purple-600 transition">
                            Connect
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MentorMatching;