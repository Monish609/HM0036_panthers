import React from "react";

const Lessons = () => {
    const lessons = [
        { id: 1, title: "Introduction to React", duration: "10:00" },
        { id: 2, title: "State and Props", duration: "15:00" },
        { id: 3, title: "React Hooks", duration: "20:00" },
    ];

    return (
        <div className="p-6 bg-gray-50 min-h-screen">
            <h1 className="text-3xl font-bold text-gray-800 mb-6">Lessons</h1>
            <div className="space-y-4">
                {lessons.map((lesson) => (
                    <div
                        key={lesson.id}
                        className="bg-white p-6 rounded-lg shadow-md flex justify-between items-center"
                    >
                        <p className="text-lg font-medium text-gray-700">{lesson.title}</p>
                        <p className="text-sm text-gray-500">{lesson.duration}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Lessons;