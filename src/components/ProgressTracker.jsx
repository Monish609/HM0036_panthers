import React, { useEffect, useState } from "react";
import axios from "axios";
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend } from "recharts";

const ProgressTracker = () => {
    const [progress, setProgress] = useState([]);

    useEffect(() => {
        const fetchProgress = async () => {
            const response = await axios.get("/api/progress");
            setProgress(response.data);
        };
        fetchProgress();
    }, []);

    const data = progress.map((item) => ({
        name: item.videoId.title,
        score: item.quizScore,
    }));

    return (
        <div className="p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Your Progress</h2>
            <BarChart width={600} height={300} data={data}>
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="score" fill="#8884d8" />
            </BarChart>
        </div>
    );
};

export default ProgressTracker;