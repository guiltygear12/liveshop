import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { INotice, noticeState } from "../../atom";
import { useRecoilValue } from "recoil";
import styled from "styled-components";

const BoardBody = styled.div`
    font-size: 16px;
    padding: 24px;
`;
const BoardHeader = styled.h2`
    font-size: 32px;
    border-bottom: 1px dashed #ccc;
    padding-bottom: 8px;
`;
const Board = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 16px;
    & > div {
        padding: 4px;
        width: 80%;
    }
`;

function BoardItemBody() {
    const { BoardId } = useParams();
    const Notice = useRecoilValue(noticeState);
    const [body, setBody] = useState<INotice>();

    useEffect(() => {
        if (BoardId != undefined) {
            setBody(Notice.find((Notice) => Notice.id === +BoardId));
        }
    }, [BoardId]);
    return (
        <Board>
            <div>
                <BoardHeader>
                    {body?.id}. {body?.title}
                </BoardHeader>
                <BoardBody>{body?.body}</BoardBody>
            </div>
        </Board>
    );
}

export default BoardItemBody;
