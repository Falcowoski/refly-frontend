import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { NavLink as RouterNavLink } from "react-router-dom";

function Header() {
    return (
        <Navbar bg="primary" variant="dark" expand="lg" fixed="top">
            <Container>
                <Navbar.Brand>Refly</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav defaultActiveKey="/" className="ms-auto">
                        <Nav.Link as={RouterNavLink} to="/">Página inicial</Nav.Link>
                        <Nav.Link as={RouterNavLink} to="records/view">Registros</Nav.Link>
                        <Nav.Link as={RouterNavLink} to="records/new">Registrar</Nav.Link>
                        <NavDropdown title="Menu" id="basic-nav-dropdown">
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