import React from "react";
import NavBarButton from "./NavBarButton";

const NavBar: React.FC = () => {
    return (
        <nav className="relative flex justify-center items-center hover:opacity-100 transition-opacity duration-300 z-50 w-full">
            
            <div className="flex fixed top-10 w-full max-w-[768px] items-center justify-center p-4 text-black p-inherit">
                
                <ul className="flex space-x-12 items-center">
                    <li>
                        <NavBarButton
                            href="/"
                            icon={<i className="bi bi-house-door-fill" />}
                            title="Home"
                        />
                    </li>
                    <li>
                        <NavBarButton
                            href="/about"
                            icon={<i className="bi bi-person-fill" />}
                            title="About"
                        />
                    </li>
                    
                    <li>
                        <NavBarButton
                            href="/projects"
                            icon={<i className="bi bi-window" />}
                            title="Projects"
                        />
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default NavBar;
