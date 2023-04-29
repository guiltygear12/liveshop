import styled from "styled-components";
import { Container, Wrapper } from "../GlobalStyled";
import { Outlet, useNavigate } from "react-router-dom";

const BoardContent = styled.div`
    width: 100%;
    padding: 16px;
`;
const BoardTapMenu = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 8px;
    button {
        color: ${(props) => props.theme.textColor};
        background-color: ${(props) => props.theme.boxColor};
        padding: 8px 16px;
        width: 120px;
        border: none;
        :hover {
        }
    }
`;
const BoardContainer = styled(Container)``;

function Board() {
    const navigate = useNavigate();
    const onNotice = () => {
        navigate("Notice");
    };
    const onEvent = () => {
        navigate("EventPage");
    };
    return (
        <BoardContainer>
            <Wrapper>
                <BoardTapMenu>
                    <button onClick={onNotice}>Notice</button>
                    <button onClick={onEvent}>Event</button>
                </BoardTapMenu>
                <BoardContent>
                    <Outlet></Outlet>
                </BoardContent>
            </Wrapper>
        </BoardContainer>
    );
}

export default Board;
