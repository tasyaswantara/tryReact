import styled from "styled-components";
import TopAppBar from "./TopAppBar";

const LayoutContainer = styled.div`
    background: rgb(245, 245, 245);
    flex-direction: column;
    width: 100%;
    min-height: 100vh;
    max-width:100%;
    margin-top:80px;
`
const AppLayout = ({ children }) => {

    return (
        <>
            <TopAppBar />
            <LayoutContainer>
                {children}
            </LayoutContainer>
        </>
    );
}

export default AppLayout;