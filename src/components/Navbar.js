import {Link} from "react";

function Navbar() {
    return (
        <nav>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/projects">Projects</Link></li>
                <li><Link to="/more">More</Link></li>
            </ul>
        </nav>
    )
}

export default Navbar;