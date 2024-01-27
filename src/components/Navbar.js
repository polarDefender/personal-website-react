import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Navbar() {
    const [isMobile, setIsMobile] = useState(window.innerWidth < 600);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        function checkIfMobile() {
            setIsMobile(window.innerWidth < 600)
        };

        window.addEventListener("resize", checkIfMobile);
        return () => window.removeEventListener("resize", checkIfMobile);
    }, []);

    function toggleMenu() {
        setIsOpen(!isOpen);
    }

    return (
        <nav className="navbar">
            {isMobile 
                ?
                <button onClick={toggleMenu} className="nav-toggle">
                    ☰
                </button>
                :
                null
            }
            <ul className={`nav-menu ${isOpen ? "show" : ""}`}>
                <li className="nav-item"><Link to="/" onClick={toggleMenu}>Home</Link></li>
                <li className="nav-item"><Link to="/portfolio" onClick={toggleMenu}>Portfolio</Link></li>
                <li className="nav-item"><Link to="/blogs" onClick={toggleMenu}>Blogs</Link></li>
                <li className="nav-item"><Link to="/pricing" onClick={toggleMenu}>Pricing</Link></li>
                <li className="nav-item"><Link to="/contact" onClick={toggleMenu}>Contact</Link></li>
            </ul>
        </nav>
    )
}

export default Navbar;