import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import styled from "styled-components";

const SideMenuWrapper = styled.aside`
    height: 100vh;
    width: 100%;
    max-width: 300px;
    border: 1px solid black;
    position: fixed;
    top: 0;
    right: -300px;
    padding: 80px 8px 0;
    transition: all 0.3s;
    &.active {
        right: 0;
    }
`;
const SideMenuContainer = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 8px;
`;
const SubMenu = styled(motion.li)``;
const SubMenuContainer = styled(motion.ul)`
    border: 1px solid crimson;
    flex-direction: column;
    gap: 8px;
`;
const MainMenu = styled.li`
    cursor: pointer;
    font-size: 18px;
    transition: all 0.3s;
    ul {
        display: none;
    }
    &.active {
        font-size: 24px;
        & ul {
            display: block;
            & li {
                font-size: 18px;
            }
        }
    }
`;
const SideMenuToggle = styled.div`
    width: 40px;
    height: 40px;
    border: 1px solid black;
    position: absolute;
    top: 80px;
    left: -40px;
    span {
        position: absolute;
        width: 100%;
        height: 3px;
        background-color: #111;
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
    return (
        <SideMenuWrapper className={showing === true ? "active" : ""}>
            <h1>메뉴임</h1>
            <SideMenuContainer>
                <MainMenu
                    className={menuIndex === 1 ? "active" : ""}
                    onClick={() => setMenuIndex(1)}
                >
                    TopMenu1
                    <AnimatePresence>
                        {menuIndex === 1 ? (
                            <SubMenuContainer
                                variants={SubMenuVariants}
                                initial="initial"
                                animate="visible"
                                exit="leaving"
                            >
                                <SubMenu variants={SubMenuItemVariants}>
                                    BottomMenu1-1
                                </SubMenu>
                                <SubMenu variants={SubMenuItemVariants}>
                                    BottomMenu1-2
                                </SubMenu>
                                <SubMenu variants={SubMenuItemVariants}>
                                    BottomMenu1-3
                                </SubMenu>
                            </SubMenuContainer>
                        ) : null}
                    </AnimatePresence>
                </MainMenu>
                <MainMenu
                    className={menuIndex === 2 ? "active" : ""}
                    onClick={() => setMenuIndex(2)}
                >
                    TopMenu2
                    <AnimatePresence>
                        {menuIndex === 2 ? (
                            <SubMenuContainer
                                variants={SubMenuVariants}
                                initial="initial"
                                animate="visible"
                                exit="leaving"
                            >
                                <SubMenu variants={SubMenuItemVariants}>
                                    BottomMenu2-1
                                </SubMenu>
                                <SubMenu variants={SubMenuItemVariants}>
                                    BottomMenu2-2
                                </SubMenu>
                                <SubMenu variants={SubMenuItemVariants}>
                                    BottomMenu2-3
                                </SubMenu>
                            </SubMenuContainer>
                        ) : null}
                    </AnimatePresence>
                </MainMenu>
                <MainMenu
                    className={menuIndex === 3 ? "active" : ""}
                    onClick={() => setMenuIndex(3)}
                >
                    TopMenu3
                </MainMenu>
                <MainMenu
                    className={menuIndex === 4 ? "active" : ""}
                    onClick={() => setMenuIndex(4)}
                >
                    TopMenu4
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
