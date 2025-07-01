import React from "react";
const BackToToButton: React.FC = () => {
    return (
        <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="fixed bottom-6 right-6 z-50 bg-gray-800 text-white px-4 py-2 rounded-full shadow-lg hover:bg-gray-700 transition"
        >
            ↑
        </button>
    );
};

export default BackToToButton;
