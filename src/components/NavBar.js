import { Link } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";

const NavBar = () => {
    return (
        <div>
            <ul className="nav-list">
                <Link to="/">
                    <li>Home</li>
                </Link>  
                <Link to="/shop">
                    <li>Shopping Cart</li>
                </Link>    
            </ul>
        </div>
    );
}

export default NavBar;