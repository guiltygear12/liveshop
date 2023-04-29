import { useRecoilState } from "recoil";
import { INotice, noticeState } from "../../atom";
import { useNavigate } from "react-router-dom";
import { fetchAllNotice } from "../../Api";
import { useEffect, useState } from "react";
import styled from "styled-components";

const BannerBoardItem = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin: 8px 0;
    padding-bottom: 4px;
    border-bottom: 1px dashed ${(props) => props.theme.shadowColor};
    h4 {
        font-size: 16px;
        cursor: pointer;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        word-break: break-all;
    }
    p {
        font-size: 14px;
    }
`;
const BannerTitle = styled.div`
    margin-bottom: 16px;
    cursor: pointer;
`;
const BannerBoard = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 90%;
`;

function MainEvent() {
    const [notice, setNotice] = useRecoilState(noticeState); // 게시글
    const [currentPosts, setCurrentPosts] = useState<INotice[]>();
    const navigate = useNavigate();

    const onBody = (id: number) => {
        navigate(`/Board/BoardBody/${id}`);
    };
    const loadNotice = async () => {
        console.log("게시글 불러오기");
        setNotice(await fetchAllNotice());
    };
    useEffect(() => {
        // 페이지 접속시 게시물을 저장
        setCurrentPosts(notice.slice(0, 5));
    }, [notice]);

    useEffect(() => {
        // 페이지 접속시 게시물을 저장
        loadNotice();
    }, []);

    return (
        <BannerBoard>
            <BannerTitle onClick={() => navigate("/Board/EventPage")}>
                EVENT
            </BannerTitle>
            {currentPosts?.map((itm, idx) => {
                return (
                    <BannerBoardItem key={`BestSeller-${idx}`}>
                        <h4 onClick={() => onBody(currentPosts[idx].id)}>
                            {itm.title}
                        </h4>
                        <p>{itm.id}</p>
                    </BannerBoardItem>
                );
            })}
        </BannerBoard>
    );
}
export default MainEvent;
