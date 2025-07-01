import React from "react";

const Socials: React.FC = () => {
    return (
        <>
            <a
                href="https://twitter.com/lezzthanthree"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600"
                aria-label="Twitter"
            >
                <i className="bi bi-twitter text-2xl"></i>
            </a>
            <a
                href="https://instagram.com/lezzthanthree"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600"
                aria-label="instagram"
            >
                <i className="bi bi-instagram text-2xl"></i>
            </a>
            <a
                href="https://youtube.com/SmiliePop"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600"
                aria-label="youtube"
            >
                <i className="bi bi-youtube text-2xl"></i>
            </a>
        </>
    );
};

export default Socials;
