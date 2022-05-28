import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { NavLink as RouterNavLink } from "react-router-dom";

function Header() {
    return (
        <Navbar bg="dark" variant="dark" expand="lg" fixed="top">
            <Container>
                <Navbar.Brand className="">Refly - Metamorfose Digital</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav defaultActiveKey="/" className="ms-auto">
                        <Nav.Link as={RouterNavLink} to="/">Home</Nav.Link>
                        <Nav.Link as={RouterNavLink} to="/create">Create</Nav.Link>
                        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                            <NavDropdown.Item>Item 3.1</NavDropdown.Item>
                            <NavDropdown.Item>Item 3.2</NavDropdown.Item>
                            <NavDropdown.Item>Item 3.3</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;