import { useNavigate } from "react-router-dom";
import { useRecoilState, useRecoilValue } from "recoil";
import styled from "styled-components";
import { checkToken } from "../atom";

const HeaderWrapper = styled.header`
    width: 100%;
    max-width: 1440px;
    height: fit-content;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 4px 16px;
    position: fixed;
    z-index: 100;
    top: 0;
    left: 50%;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    transform: translateX(-50%);
    background-color: rgba(255, 255, 255, 0.6);
    @media (max-width: 769px) {
        flex-direction: column;
    }
`;
const Logo = styled.h1`
    font-family: "LINESeedKR-Bd";
    height: 60px;
    font-size: 24px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
`;
const HeaderLeft = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 16px;
`;
const HeaderRight = styled.div`
    display: flex;
    gap: 8px;
`;
const Btn = styled.button`
    padding: 4px 8px;
    border: none;
    border-radius: 8px;
    background-color: ${(props) => props.theme.boxColor};
    box-shadow: 0 0 4px rgba(0, 0, 0, 0.2);
    cursor: pointer;
`;
function Header() {
    const [token, setToken] = useRecoilState(checkToken);
    const navigate = useNavigate();
    const onLoginbtn = () => {
        navigate("/Login");
    };
    const onJoinbtn = () => {
        navigate("/Register");
    };
    const onProducts = () => {
        navigate("/Products");
    };
    const onMyPage = () => {
        navigate("/MyPage/userInfo");
    };
    const onCart = () => {
        navigate("/MyPage/Cart");
    };
    const onHome = () => {
        navigate("/");
    };
    const onLogout = () => {
        localStorage.setItem("token", "");
        setToken((token) => []);
    };
    return (
        <HeaderWrapper>
            <HeaderLeft>
                <Logo onClick={onHome}>LIVE</Logo>
                <h2 onClick={onProducts}>Products</h2>
                <h2 onClick={onProducts}>Notice</h2>
            </HeaderLeft>
            {token.toString().length === 0 ? (
                <HeaderRight>
                    <Btn onClick={onLoginbtn}>Log in</Btn>
                    <Btn onClick={onJoinbtn}>Join</Btn>
                </HeaderRight>
            ) : (
                <HeaderRight>
                    <Btn onClick={onMyPage}>My Page</Btn>
                    <Btn onClick={onCart}>Cart</Btn>
                    <Btn onClick={onLogout}>Log Out</Btn>
                </HeaderRight>
            )}
        </HeaderWrapper>
    );
}
export default Header;
