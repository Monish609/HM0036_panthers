import React, { useState } from "react";
import axios from "axios";

const BookmarkButton = ({ videoId }) => {
    const [isBookmarked, setIsBookmarked] = useState(false);

    const handleBookmark = async () => {
        try {
            await axios.post("/api/bookmarks", { videoId });
            setIsBookmarked(true);
        } catch (error) {
            console.error("Error bookmarking video:", error);
        }
    };

    return (
        <button
            onClick={handleBookmark}
            disabled={isBookmarked}
            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
        >
            {isBookmarked ? "Bookmarked" : "Bookmark"}
        </button>
    );
};

export default BookmarkButton;