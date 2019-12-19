import React, { useState }  from 'react';
import { Link } from 'react-router-dom';
import { Collapse, Navbar, NavbarToggler, Nav, NavItem} from 'reactstrap';

const NavBar = (props) =>{
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    return(
        <Navbar light expand="md">
            <h1 className="nav-brand"><Link>Orin</Link></h1>
            <NavbarToggler onClick={toggle} />
            <Collapse isOpen={isOpen} navbar>
            <Nav className="ml-auto nav-items mb-3" navbar>
                <NavItem>
                <a href="#features">Features</a>
                </NavItem>
                <NavItem>
                <a href="#pricing">Pricing</a>
                </NavItem>
                <NavItem>
                <Link to="/signIn">Sign in</Link>
                </NavItem>
                <NavItem className="button">
                <a className="btn-sign-up" href="#signUp">Sign up</a>
                </NavItem>
            </Nav>
            </Collapse>
        </Navbar>
    );
}

export default NavBar;