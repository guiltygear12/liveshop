import { Outlet, useNavigate, useParams } from "react-router-dom";
import { Container } from "../GlobalStyled";
import styled from "styled-components";
import { useState } from "react";

const MyPageContainer = styled(Container)`
    height: fit-content;
    padding: 100px 0;
    display: flex;
    justify-content: center;
    align-items: center;
    & > div {
        box-shadow: 0 0 8px rgba(0, 0, 0, 0.2);
        width: 100%;
        max-width: 1440px;
    }
`;
const MyPageTapMenu = styled.div`
    display: flex;
    button {
        flex: 1;
        padding: 8px 16px;
        font-size: 18px;
        transition: 0.3s;
        border: none;
        cursor: pointer;
    }
    @media (max-width: 1024px) {
        flex-direction: column;
    }
`;
const MyPageContent = styled.section`
    width: 100%;
    padding: 24px;
`;
function MyPage() {
    const navigate = useNavigate();
    const onMypage = () => {
        navigate("userInfo");
    };
    const onLike = () => {
        navigate("LikeList");
    };
    const onCart = () => {
        navigate("Cart");
    };
    return (
        <MyPageContainer>
            <div>
                <MyPageTapMenu>
                    <button onClick={onMypage}>마이페이지</button>
                    <button onClick={onLike}>찜 목록</button>
                    <button onClick={onCart}>장바구니</button>
                </MyPageTapMenu>
                <MyPageContent>
                    <Outlet></Outlet>
                </MyPageContent>
            </div>
        </MyPageContainer>
    );
}
export default MyPage;
