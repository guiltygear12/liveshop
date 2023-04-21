import styled from "styled-components";

const FooterWrapper = styled.footer`
    width: 100%;
    height: 160px;
    background-color: #111;
    display: flex;
    justify-content: center;
    align-items: center;
    p {
        color: #fff;
    }
`;
function Footer() {
    return (
        <FooterWrapper>
            <p>"Copyright 2023. MinHyeong-Park. All right reserved."</p>
        </FooterWrapper>
    );
}
export default Footer;
