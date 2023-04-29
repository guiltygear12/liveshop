import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useRecoilState } from "recoil";
import { DarkModeState } from "../atom";

const Circle = styled(motion.div)`
    width: 80%;
    height: 80%;
    border-radius: 80%;
    font-size: 12px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const ThemeBtn = styled(motion.div)`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0 0 4px rgba(0, 0, 0, 0.4);
    :nth-of-type(1) {
        ${Circle} {
            background-color: teal;
        }
    }
    :nth-of-type(2) {
        ${Circle} {
            background-color: tomato;
        }
    }
`;
const ThemeBtnWrapper = styled(motion.div)`
    padding: 4px;
    border-radius: 40px;
    display: flex;
    gap: 16px;
    box-shadow: 0 0 4px rgba(0, 0, 0, 0.2);
`;
const Theme = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 16px;
`;
const SideMenuWrapper = styled.aside`
    background-color: ${(props) => props.theme.boxColor};
    color: ${(props) => props.theme.textColor};
    border: 1px dashed ${(props) => props.theme.shadowColor};
    height: 80vh;
    width: 100%;
    max-width: 300px;
    position: fixed;
    top: 80px;
    right: -300px;
    padding: 8px;
    transition: all 0.3s;
    z-index: 10;
    &.active {
        right: 0;
    }
`;
const SideMenuContainer = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 24px;
`;
const SubMenu = styled(motion.li)``;
const SubMenuContainer = styled(motion.ul)`
    flex-direction: column;
    gap: 8px;
`;
const MainMenu = styled.li`
    cursor: pointer;
    font-size: 16px;
    transition: all 0.3s;
    border-bottom: 1px dashed ${(props) => props.theme.textColor};
    ul {
        display: none;
    }
    &.active {
        font-size: 24px;
        & ul {
            display: block;
            background-color: ${(props) => props.theme.bgColor};
            & li {
                font-size: 18px;
            }
        }
    }
`;
const SideMenuToggle = styled.div`
    padding: 4px;
    width: 30px;
    height: 30px;
    position: absolute;
    top: 80px;
    left: -40px;
    span {
        position: absolute;
        width: 100%;
        height: 3px;
        background-color: ${(props) => props.theme.textColor};
        transition: all 0.3s;
        transform-origin: center center;
    }
    span:nth-of-type(1) {
        top: 0;
        transform: translateY(-50%);
    }
    span:nth-of-type(2) {
        top: 50%;
        transform: translateY(-50%);
        opacity: 1;
    }
    span:nth-of-type(3) {
        top: 100%;
        transform: translateY(-50%);
    }
    &.active {
        span:nth-of-type(1) {
            top: 50%;
            transform: translateY(-50%) rotate(45deg);
        }
        span:nth-of-type(2) {
            top: 50%;
            transform: translateY(-50%);
            opacity: 0;
        }
        span:nth-of-type(3) {
            top: 50%;
            transform: translateY(-50%) rotate(-45deg);
        }
    }
`;
const SubMenuVariants = {
    initial: {
        display: "none",
        height: 0,
    },
    visible: {
        display: "flex",
        height: "fit-content",
        transition: {
            duration: 1,
            staggerChildren: 0.2,
        },
    },
    leaving: {
        display: "none",
        height: 0,
        transition: {
            duration: 1,
            staggerChildren: 0.2,
        },
    },
};
const SubMenuItemVariants = {
    initial: {
        opacity: 0,
    },
    visible: {
        opacity: 1,
        trasition: {
            duration: 1,
        },
    },
    leaving: {
        opacity: 0,
        trasition: {
            duration: 1,
        },
    },
};

function SideMenu() {
    const [showing, setShowing] = useState(true);
    const [menuIndex, setMenuIndex] = useState(0);
    const [DarkMode, setDarkMode] = useRecoilState(DarkModeState);
    const navigate = useNavigate();
    const onDarkMode = () => {
        setDarkMode((prev) => !prev);
    };
    return (
        <SideMenuWrapper className={showing === true ? "active" : ""}>
            <Theme>
                <h3>DarkTheme</h3>
                <ThemeBtnWrapper>
                    <ThemeBtn>
                        {DarkMode ? (
                            <Circle layoutId="DarkModeBtn" onClick={onDarkMode}>
                                ON
                            </Circle>
                        ) : null}
                    </ThemeBtn>
                    <ThemeBtn>
                        {!DarkMode ? (
                            <Circle layoutId="DarkModeBtn" onClick={onDarkMode}>
                                OFF
                            </Circle>
                        ) : null}
                    </ThemeBtn>
                </ThemeBtnWrapper>
            </Theme>
            <SideMenuContainer>
                <MainMenu
                    className={menuIndex === 1 ? "active" : ""}
                    onClick={() => setMenuIndex(1)}
                >
                    카테고리
                    <AnimatePresence>
                        {menuIndex === 1 ? (
                            <SubMenuContainer
                                variants={SubMenuVariants}
                                initial="initial"
                                animate="visible"
                                exit="leaving"
                            >
                                <SubMenu
                                    variants={SubMenuItemVariants}
                                    onClick={() => navigate("/Products/0")}
                                >
                                    전체상품
                                </SubMenu>
                                <SubMenu
                                    variants={SubMenuItemVariants}
                                    onClick={() => navigate("/Products/1")}
                                >
                                    전자제품
                                </SubMenu>
                                <SubMenu
                                    variants={SubMenuItemVariants}
                                    onClick={() => navigate("/Products/2")}
                                >
                                    악세서리
                                </SubMenu>
                                <SubMenu
                                    variants={SubMenuItemVariants}
                                    onClick={() => navigate("/Products/3")}
                                >
                                    남성의류
                                </SubMenu>
                                <SubMenu
                                    variants={SubMenuItemVariants}
                                    onClick={() => navigate("/Products/4")}
                                >
                                    여성의류
                                </SubMenu>
                            </SubMenuContainer>
                        ) : null}
                    </AnimatePresence>
                </MainMenu>
                <MainMenu
                    className={menuIndex === 2 ? "active" : ""}
                    onClick={() => setMenuIndex(2)}
                >
                    마이페이지
                    <AnimatePresence>
                        {menuIndex === 2 ? (
                            <SubMenuContainer
                                variants={SubMenuVariants}
                                initial="initial"
                                animate="visible"
                                exit="leaving"
                            >
                                <SubMenu
                                    variants={SubMenuItemVariants}
                                    onClick={() => navigate("/MyPage/userInfo")}
                                >
                                    내 정보
                                </SubMenu>
                                <SubMenu
                                    variants={SubMenuItemVariants}
                                    onClick={() => navigate("/MyPage/LikeList")}
                                >
                                    찜 목록
                                </SubMenu>
                                <SubMenu
                                    variants={SubMenuItemVariants}
                                    onClick={() => navigate("/MyPage/Cart")}
                                >
                                    장바구니
                                </SubMenu>
                            </SubMenuContainer>
                        ) : null}
                    </AnimatePresence>
                </MainMenu>
                <MainMenu
                    className={menuIndex === 3 ? "active" : ""}
                    onClick={() => setMenuIndex(3)}
                >
                    게시판
                    <AnimatePresence>
                        {menuIndex === 3 ? (
                            <SubMenuContainer
                                variants={SubMenuVariants}
                                initial="initial"
                                animate="visible"
                                exit="leaving"
                            >
                                <SubMenu
                                    variants={SubMenuItemVariants}
                                    onClick={() => navigate("/Board/Notice")}
                                >
                                    공지사항
                                </SubMenu>
                                <SubMenu
                                    variants={SubMenuItemVariants}
                                    onClick={() => navigate("/Board/EventPage")}
                                >
                                    이벤트
                                </SubMenu>
                            </SubMenuContainer>
                        ) : null}
                    </AnimatePresence>
                </MainMenu>
            </SideMenuContainer>
            <SideMenuToggle
                className={showing === true ? "active" : ""}
                onClick={() => setShowing((prev) => !prev)}
            >
                <span></span>
                <span></span>
                <span></span>
            </SideMenuToggle>
        </SideMenuWrapper>
    );
}
export default SideMenu;
