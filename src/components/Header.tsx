import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";

function Header() {
    return (
        <Navbar bg="dark" variant="dark" expand="lg" fixed="top">
            <Container>
                <Navbar.Brand className="">Refly - Metamorfose Digital</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link>Item 1</Nav.Link>
                        <Nav.Link>Item 2</Nav.Link>
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