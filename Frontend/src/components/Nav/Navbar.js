import './Navbar.css';
import { Link } from 'react-router-dom';
import * as ReactBootStrap from "react-bootstrap";
import Logo from './logo-26.png';
import { FaShoppingCart } from "react-icons/fa";

const navbar = () => {
    return (  
        <>
        <ReactBootStrap.Navbar collapseOnSelect expand="lg" bg="light" variant="light">
            <ReactBootStrap.Navbar.Brand inline>
                <img
                    alt="logo"
                    src={Logo}
                    width="150"
                    height="100"
                    className="d-inline-block align-top"
                />
            </ReactBootStrap.Navbar.Brand>
            <ReactBootStrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <ReactBootStrap.Navbar.Collapse id="responsive-navbar-nav justify-content-end">
                <ReactBootStrap.Nav className="ml-auto">
                    <ReactBootStrap.Nav.Link><Link to="/cart"><FaShoppingCart /><span className="cartlogo__badge">0</span></Link></ReactBootStrap.Nav.Link>
                    <ReactBootStrap.Nav.Link><Link to="/">Shop</Link></ReactBootStrap.Nav.Link>
                </ReactBootStrap.Nav>
              </ReactBootStrap.Navbar.Collapse>           
        </ReactBootStrap.Navbar>
        </>        
    )
}

export default navbar;
