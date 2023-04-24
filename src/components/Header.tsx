import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const HeaderWrapper = styled.header`
    width: 100%;
    max-width: 1440px;
    height: 80px;
    margin: 0 auto;
    border: 1px solid tomato;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 4px 16px;
    position: fixed;
    z-index: 100;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    background-color: #fff;
`;
const Logo = styled.h1`
    width: 120px;
    height: 60px;
    border: 1px solid black;
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
    box-shadow: 0 0 4px rgba(0, 0, 0, 0.1), 4px 4px 4px rgba(0, 0, 0, 0.3);
    cursor: pointer;
`;
function Header() {
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
        navigate("/MyPage");
    };
    const onHome = () => {
        navigate("/");
    };
    return (
        <HeaderWrapper>
            <HeaderLeft>
                <Logo onClick={onHome}>로고 위치</Logo>
                <h1 onClick={onProducts}>Products</h1>
                <h1 onClick={onMyPage}>MyPage</h1>
            </HeaderLeft>
            <HeaderRight>
                <Btn onClick={onLoginbtn}>로그인</Btn>
                <Btn onClick={onJoinbtn}>회원가입</Btn>
            </HeaderRight>
        </HeaderWrapper>
    );
}
export default Header;
