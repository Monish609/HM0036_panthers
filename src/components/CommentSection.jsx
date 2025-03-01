import React, { useState, useEffect } from "react";
import axios from "axios";

const CommentSection = ({ threadId }) => {
    const [comments, setComments] = useState([]);
    const [newComment, setNewComment] = useState("");

    useEffect(() => {
        const fetchComments = async () => {
            const response = await axios.get(`/api/forum/comments/${threadId}`);
            setComments(response.data);
        };
        fetchComments();
    }, [threadId]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        await axios.post("/api/forum/comments", { content: newComment, threadId });
        setNewComment("");
        fetchComments();
    };

    return (
        <div className="mt-4">
            <h3 className="text-lg font-semibold text-gray-700">Comments</h3>
            <form onSubmit={handleSubmit} className="mb-4">
                <textarea
                    value={newComment}
                    onChange={(e) => setNewComment(e.target.value)}
                    placeholder="Add a comment"
                    className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button
                    type="submit"
                    className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition mt-2"
                >
                    Submit
                </button>
            </form>
            {comments.map((comment) => (
                <div key={comment._id} className="bg-gray-50 p-2 rounded-lg mb-2">
                    <p className="text-gray-700">{comment.content}</p>
                </div>
            ))}
        </div>
    );
};

export default CommentSection;