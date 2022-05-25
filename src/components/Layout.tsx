import { Container } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import styled from "styled-components";
import GlobalStyle from "../GlobalStyle";
import Header from "./Header";

const StyledContainer = styled(Container)`
    min-height: 100vh;
    /* padding-top: calc(3.5rem + 2rem); // 3.5rem to fix fixed <Header /> */
    padding-top: 7rem; // Fix fixed <Header />
    /* display: flex; */
    /* align-items: center; */
    padding-bottom: 3.5rem;
`;

function Layout() {
    return (
        <>
            <GlobalStyle />
            <Header />
            <StyledContainer fluid className="bg-light">
                <Outlet />
            </StyledContainer>
        </>
    );
}

export default Layout;