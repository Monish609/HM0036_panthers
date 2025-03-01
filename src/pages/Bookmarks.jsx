import React, { useEffect, useState } from "react";
import axios from "axios";

const Bookmarks = () => {
    const [bookmarks, setBookmarks] = useState([]);

    useEffect(() => {
        const fetchBookmarks = async () => {
            const response = await axios.get("/api/bookmarks");
            setBookmarks(response.data);
        };
        fetchBookmarks();
    }, []);

    return (
        <div className="p-6">
            <h1 className="text-3xl font-bold text-gray-800 mb-6">My Bookmarks</h1>
            {bookmarks.map((bookmark) => (
                <div key={bookmark._id} className="bg-white p-4 rounded-lg shadow-md mb-4">
                    <h2 className="text-xl font-semibold text-gray-700">{bookmark.videoId.title}</h2>
                    <p className="text-gray-600">{bookmark.videoId.description}</p>
                </div>
            ))}
        </div>
    );
};

export default Bookmarks;