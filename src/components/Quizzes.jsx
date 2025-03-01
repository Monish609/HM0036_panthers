import React, { useState } from "react";

const Quizzes = () => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [showScore, setShowScore] = useState(false);

    const quizData = [
        {
            question: "What is React?",
            options: ["A library", "A framework", "A language"],
            correctAnswer: "A library",
        },
        {
            question: "What is JSX?",
            options: ["JavaScript XML", "JavaScript Extension", "JavaScript Syntax"],
            correctAnswer: "JavaScript XML",
        },
    ];

    const handleAnswer = (selectedAnswer) => {
        if (selectedAnswer === quizData[currentQuestion].correctAnswer) {
            setScore(score + 1);
        }

        if (currentQuestion < quizData.length - 1) {
            setCurrentQuestion(currentQuestion + 1);
        } else {
            setShowScore(true);
        }
    };

    return (
        <div className="p-6 bg-gray-50 min-h-screen">
            <h1 className="text-3xl font-bold text-gray-800 mb-6">Quizzes</h1>
            {showScore ? (
                <div className="bg-white p-6 rounded-lg shadow-md text-center">
                    <p className="text-lg font-medium text-gray-700">
                        Your Score: {score} / {quizData.length}
                    </p>
                </div>
            ) : (
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <p className="text-lg font-medium text-gray-700 mb-4">
                        {quizData[currentQuestion].question}
                    </p>
                    <div className="space-y-3">
                        {quizData[currentQuestion].options.map((option, index) => (
                            <button
                                key={index}
                                onClick={() => handleAnswer(option)}
                                className="w-full bg-blue-50 p-3 rounded-lg text-gray-700 hover:bg-blue-100 transition"
                            >
                                {option}
                            </button>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default Quizzes;