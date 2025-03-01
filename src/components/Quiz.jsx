import React, { useState, useEffect } from "react";
import axios from "axios";

const Quiz = ({ videoId }) => {
    const [quiz, setQuiz] = useState(null);
    const [score, setScore] = useState(0);
    const [currentQuestion, setCurrentQuestion] = useState(0);

    useEffect(() => {
        const fetchQuiz = async () => {
            const response = await axios.get(`/api/quizzes/${videoId}`);
            setQuiz(response.data);
        };
        fetchQuiz();
    }, [videoId]);

    const handleAnswer = (selectedAnswer) => {
        if (selectedAnswer === quiz.questions[currentQuestion].correctAnswer) {
            setScore(score + 1);
        }
        setCurrentQuestion(currentQuestion + 1);
    };

    if (!quiz) return <p>Loading quiz...</p>;

    return (
        <div className="p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Quiz</h2>
            {currentQuestion < quiz.questions.length ? (
                <div>
                    <p className="text-lg text-gray-700">{quiz.questions[currentQuestion].question}</p>
                    <div className="space-y-2 mt-4">
                        {quiz.questions[currentQuestion].options.map((option, index) => (
                            <button
                                key={index}
                                onClick={() => handleAnswer(option)}
                                className="w-full bg-blue-50 p-2 rounded-lg text-gray-700 hover:bg-blue-100 transition"
                            >
                                {option}
                            </button>
                        ))}
                    </div>
                </div>
            ) : (
                <p className="text-lg text-gray-700">Your score: {score} / {quiz.questions.length}</p>
            )}
        </div>
    );
};

export default Quiz;