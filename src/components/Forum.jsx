import React, { useEffect, useState } from "react";
import axios from "axios";
import CommentSection from "./CommentSection";

const Forum = ({ videoId }) => {
    const [threads, setThreads] = useState([]);

    useEffect(() => {
        const fetchThreads = async () => {
            const response = await axios.get(`/api/forum/threads/${videoId}`);
            setThreads(response.data);
        };
        fetchThreads();
    }, [videoId]);

    return (
        <div className="p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Discussion Forum</h2>
            {threads.map((thread) => (
                <div key={thread._id} className="bg-white p-4 rounded-lg shadow-md mb-4">
                    <h3 className="text-lg font-semibold text-gray-700">{thread.title}</h3>
                    <p className="text-gray-600">{thread.content}</p>
                    <CommentSection threadId={thread._id} />
                </div>
            ))}
        </div>
    );
};

export default Forum;